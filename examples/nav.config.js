
const navInfo = [
    {
        label: '开发指南',
        groups: [
            {
                children: [
                    {label: '介绍', name: 'intro', path: '/components/intro'},
                    {label: '安装', name: 'installation', path: '/components/installation'},
                    // {
                    //     label: '快速开始',
                    //     name: 'quickstart',
                    //     path: '/components/quickstart'
                    // },
                    // {
                    //     label: '更新日志',
                    //     name: 'changelog',
                    //     path: '/components/changelog'
                    // }
                ]
            }
        ]
    },
    {
        label: '组件',
        groups: [
            {
                label: '基础组件',
                children: [
                    {label: 'Layout 布局', path: '/components/layout', name: 'layout'},
                    {label: 'Button 按钮', path: '/components/button', name: 'button'}
                ]
            }
        ]
    }
]

export default navInfo