


// 公用子路由侧边栏
const EmptyLayout = () => import(/* webpackChunkName: "EmptyLayout" */ '@/components/EmptyLayout.vue') // webpack的魔法注释，将拆分出的js命名为EmptyLayout

// 首页
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/group/home/Index.vue') // webpack的魔法注释，将拆分出的js命名为Home

// 小组数据
const MemberData = () => import(/* webpackChunkName: "MemberData" */ '@/views/group/groupData/memberData/Index.vue') // webpack的魔法注释，将拆分出的js命名为MemberData
const ContentData = () => import(/* webpackChunkName: "ContentData" */ '@/views/group/groupData/contentData/Index.vue') // webpack的魔法注释，将拆分出的js命名为ContentData

// 小组管理
const GroupInfo = () => import(/* webpackChunkName: "GroupInfo" */ '@/views/group/groupManage/groupInfo/Index.vue') // webpack的魔法注释，将拆分出的js命名为GroupInfo
const MemberManage = () => import(/* webpackChunkName: "MemberManage" */ '@/views/group/groupManage/memberManage/Index.vue') // webpack的魔法注释，将拆分出的js命名为MemberManage
const TrendsManage = () => import(/* webpackChunkName: "TrendsManage" */ '@/views/group/groupManage/trendsManage/Index.vue') // webpack的魔法注释，将拆分出的js命名为TrendsManage
const ResourceManage = () => import(/* webpackChunkName: "ResourceManage" */ '@/views/group/groupManage/resourceManage/Index.vue') // webpack的魔法注释，将拆分出的js命名为ResourceManage
const QuestionManage = () => import(/* webpackChunkName: "QuestionManage" */ '@/views/group/groupManage/questionManage/Index.vue') // webpack的魔法注释，将拆分出的js命名为QuestionManage
const AnswerManage = () => import(/* webpackChunkName: "AnswerManage" */ '@/views/group/groupManage/answerManage/Index.vue') // webpack的魔法注释，将拆分出的js命名为AnswerManage

// 权限管理
const AuthManage = () => import(/* webpackChunkName: "AuthManage" */ '@/views/group/authManage/index/Index.vue') // webpack的魔法注释，将拆分出的js命名为AuthManage


const routes = [

    {
        path: "/",
        redirect: '/home',
        hidden: true,
    },

    {
        path: '/home',
        name: 'home',
        component: Home,
        // hidden: true, // 隐藏此nav导航
        meta: {
            title: '首页',
        },
    },

    {
        path: '/group',
        name: 'group',
        redirect: '/group/groupData',
        component: EmptyLayout,
        meta: {
            title: '图片',
        },
        children: [
            {
                path: 'groupData',
                name: 'groupData',
                redirect: '/group/groupData/memberData',
                component: EmptyLayout,
                meta: {
                    title: "汽车",
                },
                children: [
                    {
                        path: 'memberData',
                        name: 'memberData',
                        component: MemberData,
                        meta: {
                            title: "凯美瑞",
                        }
                    },
                    {
                        path: 'contentData',
                        name: 'contentData',
                        component: ContentData,
                        meta: {
                            title: "卡罗拉",
                        }
                    },
                ]
            },
            {
                path: 'groupManage',
                name: 'groupManage',
                redirect: '/group/groupManage/groupInfo',
                component: EmptyLayout,
                meta: {
                    title: "运动",
                },
                children: [
                    {
                        path: 'groupInfo',
                        name: 'groupInfo',
                        component: GroupInfo,
                        meta: {
                            title: "篮球",
                        }
                    },
                    {
                        path: 'memberManage',
                        name: 'memberManage',
                        component: MemberManage,
                        meta: {
                            title: "足球",
                        }
                    },
                    {
                        path: 'trendsManage',
                        name: 'trendsManage',
                        component: TrendsManage,
                        meta: {
                            title: "乒乓球",
                        }
                    },
                    {
                        path: 'resourceManage',
                        name: 'resourceManage',
                        component: ResourceManage,
                        meta: {
                            title: "网球",
                        }
                    },
                    {
                        path: 'questionManage',
                        name: 'questionManage',
                        component: QuestionManage,
                        meta: {
                            title: "滑雪",
                        }
                    },
                    {
                        path: 'answerManage',
                        name: 'answerManage',
                        component: AnswerManage,
                        meta: {
                            title: "滑冰",
                        }
                    },
                ]
            },
            {
                path: 'authManage',
                name: 'authManage',
                component: AuthManage,
                meta: {
                    title: "敲代码",
                },
            },

        ]
    },

]

export default routes