/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':1165,'content':'Choosing to be positive and having a grateful attitude is going to determine how you're going to live your life.</br> - </br>Joel Osteen'}");
mingyan.push("{'index':1212,'content':'Peace is the beauty of life. It is sunshine. It is the smile of a child, the love of a mother, the joy of a father, the togetherness of a family. It is the advancement of man, the victory of a just cause, the triumph of truth.</br> - </br>Menachem Begin'}");
mingyan.push("{'index':563,'content':'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.</br> - </br>Maya Angelou'}");
mingyan.push("{'index':1291,'content':'Positivity, confidence, and persistence are key in life, so never give up on yourself.</br> - </br>Khalid'}");
mingyan.push("{'index':855,'content':'Life is short, and if we enjoy every moment of every day, then we will be happy no matter what happens or what changes along the way.</br> - </br>Gretchen Bleiler'}");
mingyan.push("{'index':1068,'content':'I decided in my life that I would do nothing that did not reflect positively on my father's life.</br> - </br>Sidney Poitier'}");
mingyan.push("{'index':435,'content':'Life ain't always beautiful, but it's a beautiful ride.</br> - </br>Gary Allan'}");
mingyan.push("{'index':342,'content':'We are all born alone and die alone. The loneliness is definitely part of the journey of life.</br> - </br>Jenova Chen'}");
mingyan.push("{'index':918,'content':'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.</br> - </br>Rabindranath Tagore'}");
mingyan.push("{'index':1258,'content':'I am blessed to have so many great things in my life - family, friends and God. All will be in my thoughts daily.</br> - </br>Lil' Kim'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}