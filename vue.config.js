const path = require('path')
const MarkdownItContainer = require('markdown-it-container')

const wrapCustomClass = render => {
    return (...args) => {
        return render(...args)
            .replace('<code class=">', '<code class="hljs >')
            .replace('<code>', '<code class="hljs">')
    }
}

const cheerio = require('cheerio')

const striptags = (str, tags) => {
  const $ = cheerio.load(str, { decodeEntities: false })

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags
  let len = tags.length

  while (len--) {
    $(tags[len]).remove()
  }

  return $.html()
}

const convertHtml = str => str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))

module.exports = {
    chainWebpack: config => {
        config.entry('app')
            .clear()
            .add(path.resolve(__dirname, 'examples/index.js'))
            .end()

        config.resolve.modules
            .prepend('packages')
            .prepend('examples')
            .end()

        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
              preventExtract: true,
              raw: true,
              preprocess(markdownIt, source){
                markdownIt.renderer.rules.table_open = () => '<table class="table">'
                markdownIt.renderer.rules.fence = wrapCustomClass(markdownIt.renderer.rules.fence)

                const code_inline = markdownIt.renderer.rules.code_inline

                markdownIt.renderer.rules.code_inline = (...args) => {
                    args[0][args[1]].attrJoin('class', 'code_inline')
                    return code_inline(...args);
                }

                return source
              },
              use: [
                  [MarkdownItContainer, 'demo', {
                      validate: params => params.trim().match(/^demo\s*(.*)$/),
                      render:(tokens, idx) => {
                        //   const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                          if(tokens[idx].nesting === 1){
                            // const desc = tokens[idx + 2].content
                            const html = convertHtml(striptags(tokens[idx + 1].content, 'script'))
                            tokens[idx + 2].children = []

                            return `<demo-block>
                                        <div slot="desc">${html}</div>
                                        <div slot="highlight">`
                          }
                          return '</div></demo-block>\n'
                      }
                  }]
              ]
            })
    }
}