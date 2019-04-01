# day01
## 1. 说说你对React的基本理解
    1). 什么
       动态构建用户界面的JS库
    2). React的特点
       Declarative(声明式编码)
       Component-Based(组件化编码)
       高效
    3). React高效的原因
       虚拟(virtual)DOM, 不总是直接操作真实DOM(批量更新, 减少更新的次数) 
       高效的DOM Diff算法, 最小化DOM更新
       
## 2. 说说jSX	
    1). JSX 是一个看起来很像 XML 的 js 语法扩展
    2). 作用: 创建虚拟DOM(元素对象)
    2). 浏览器不能直接运行, 需要使用babel转换成纯JS语法: React.createElement()
    4). 相比于纯JS要编码更简洁易读
    5). 注意: JSX标签必须有结束, 组件标签首字母必须大写

## 3. 使用2种方式定义一个简单组件, 并区别它们
    定义
        1). 方式1: 工厂函数(简单/无状态组件)
           function MyComponent1(props) {
              return <h1>自定义组件标题11111</h1>
           }
        2). 方式2: ES6类(复杂/有状态组件)
           class MyComponent2 extends React.Component {
              render () { // 回调函数, 为组件对象提供虚拟DOM
                return <h1>自定义组件标题33333</h1>
              }
           }
    区别:
        1). 类组件: 使用class定义的组件, 会产生组件对象, 可以有自身的状态和生命周期勾子
        2). 函数组件: 使用function定义的组件, 不会产生组件对象, 没有自身的状态和生命周期勾子

## 4. 区别组件对象的3大属性
    1). state: 值为容器对象, 保存的是组件内可变的数据,组件根据state中的数据显示, 要更新界面只要更新state即可 
    2). props: 值为容器对象, 保存的是从组件外传递过来的数据, 当前组件只读, 父组件修改了自动显示新数据
    3). refs: 值为容器对象, 保存的是n个有ref属性的dom元素对象, 属性名是ref指定的标识名称, 值为对应的dom元素

## 5. React组件化编码的3步与2个重要问题
    编码的3步
       1). 拆分组件
       2). 实现静态组件
       3). 实现动态组件
          a. 动态显示初始化数据
             1. 类型
             2. 名称
             3. 保存在哪个组件
          b. 交互
    2个重要问题
       1). 状态数据保存在哪个组件?  看是某个组件需要, 还是某些组件需要(给父组件)
       2). 更新状态数据的行为在哪个组件? 状态在哪个组件, 行为就定义在哪个组件
       
## 6. 说说你对模块与模块化, 组件与组件化的理解
    1). 模块: 具有特定功能的js文件
    2). 模块化: 如果项目的JS编写是以多模块编写组合使用的, 那这个项目就是一个模块化的项目, 也就是模块化的编码方式
    2). 组件: 实现局部功能界面的所有代码的集合
    3). 组件化: 如果项目的功能界面是由多个组件组合编写实现的, 那这个项目就是一个组件化的项目, 也就是组件的编码方式

## 7. 调用 setState 之后发生了什么？
    1). React 会将传入的参数对象与组件当前的状态合并产生了新的state
    2). 生成新的虚拟DOM树  ==> render()
    3). 计算出新树与老树的节点差异，然后做真实DOM的差异更新
    
# day02
## 1. 说说受控组件与非受制组件
    受控组件: 包含Form输入的组件, 且在用户输入数据时自动实时收集到状态中, 相关技术: onChange + state
    非受控组件: 包含Form输入的组件, 用户输入的数据在提交表单请求才手动收集, 相关技术: ref

## 2. 说说组件的生命周期
    一、初始化阶段：ReactDOM.render(<Xxx/>, containDom)
       constructor(): 构造器方法
       componentWillMount：组件即将被挂载
       *render:生成/返回对应的虚拟DOM
       *componentDidMount:组件真正在被挂载(初始显示)之后
    
    二、更新阶段：this.setState({})
       *componentWillReceiveProps:组件将要接收到新的属性时调用
       *shouldComponentUpdate:组件接受到新属性或者新状态的时候调用（如果返回false,不调用render(), 否则调用）
       componentWillUpdate:组件将要更新
       *render:生成/返回新的虚拟DOM
       componentDidUpdate:组件已经更新
    
    三、销毁阶段：ReactDOM.unmountComponentAtNode(div)
       *componentWillUnmount:组件即将销毁

## 3. 说说react中的key的作用  | 为什么key不要使用index
    1. 虚拟DOM的key的作用?
       1). 简单说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用
       2). 详细说: 当列表数组中的数据发生变化生成新的虚拟DOM后, React进行新旧虚拟DOM的diff比较
           a. key没有变
               item数据没变, 直接使用原来的真实DOM
               item数据变了, 对原来的真实DOM进行数据更新
           b. key变了
               销毁原来的真实DOM, 根据item数据创建新的真实DOM显示(即使item数据没有变)
    2. key为index的问题
       1). 添加/删除/排序 => 产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低
       2). 如果item界面还有输入框 => 产生错误的真实DOM更新 ==> 界面有问题
       注意: 如果不存在添加/删除/排序操作, 用index没有问题
    3. 解决:
       使用item数据的标识数据作为key, 比如id属性值
  
## 4. 说说脚手架的理解
    1). 用来创建基于某个特定库(react/vue)的模板项目的工具包
    2). 全局下载脚手架后, 就会多出一个命令, 通过命令就可以创建项目
    3). 创建出的项目已经是有完整配置, 依赖声明的一个模块化/组件化/工程化的项目

## 5. 说说项目的开发环境运行与生产环境打包运行
    1). 开发环境运行
       a. 命令:
          npm start/ npm  run dev
       b. 背后做了什么
          在内存中生成打包文件(不生成本地打包文件)
          启动服务器运行内存中的打包文件
    2). 生产环境打包运行
       a. 命令
          npm run build
          serve build/dist
       b. 背后做了什么
          在内存中生成打包文件
          生成本地打包文件
          启动服务器加载运行本地打包文件

## 6. 为什么虚拟dom和dom diff算法能提高性能?
    虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。
    具体实现步骤如下：
       1). 用一般JS对象结构表示 DOM 树的结构, 然后用这个树构建一个真正的DOM树显示到页面
       2). 当状态更新的时候，重新构造一棵新的对象树
       3). 然后用新的树和旧的树进行diff比较, 得到虚拟DOM的差异, 并转化成对应的DOM更新
![](https://i.imgur.com/3byb09Z.png)

## 7. package.json的结构
    {
       "name": "react-demo", // 标识名称
       "version": "1.0.0", // 版本号
       "scripts": { // 打包运行相关的npm命令
          "xxx": "具体命令"   npm run xxx
       },
       dependencies: {}, // 运行时依赖
       devDependencies: {} // 开发时依赖
    }

## 8. 区别React中的事件与原生的DOM事件
    1). 为了解决跨浏览器兼容性问题，React 会将浏览器原生事件封装为合成事件
    2). React 并没有直接将事件附着到子元素上, 而是将事件绑定在了组件的根元素上(使用事件委托)
    
## 9. 命令式编程与声明式编程
    声明式编程
  		只关注做什么, 而不关注怎么做(流程),  类似于填空题
  	命令式编程
  		要关注做什么和怎么做(流程), 类似于问答题
  	
  	var arr = [1, 3, 5, 7]
  	// 需求: 得到一个新的数组, 数组中每个元素都比arr中对应的元素大10: [11, 13, 15, 17]
  	// 命令式编程
        var arr2 = []
        for(var i =0;i<arr.length;i++) {
          arr2.push(arr[i]+10)
        }
        console.log(arr2)
  	// 声明式编程
        var arr3 = arr.map(function(item, index){
          return item +10
        })
  	// 声明式编程是建立命令式编程的基础上
  	
  	// 数组中常见声明式方法
  		map() / forEach() / find() / findIndex() / reduce()
  		arr.find(item => item>3)