grunt-seajs-test
================

使用grunt-cmd-transport和grunt-cmd-concat进行seajs打包



1、对于jquery的第三方库，不要使用alias，否则会被绕进去，transport和concat的文档写的太少。<br />
2、对于jquery的第三方库，直接自己手动使用define把它包一遍,写好前缀ID，不要指望transport进行这个操作。<br />
3、写配置的时候，只需要指定paths就行了，不用指定alias。
