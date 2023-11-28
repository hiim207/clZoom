Zoom 클론 코딩(23.11.28)
using NodeJS, WebRTC, and Websockets.

Node.js 는 자바스크립트 런타임 /nodejs.org
런타임 : 프로그래밍 언어가 구동되는 환경

터미널에서 아래 입력 시

npm init-y
package.json이 생성됨

*package.json은 프로젝트와 관련된 메타데이터가 담기는 npm을 주고받는 장소(패키지의 이름, 버전, 데이터 등이 담긴 파일)

{
  "name": "clzoom",
  "version": "1.0.0",
  "description": "23.11.28 Zoom 클론 코딩",
  "license": "MIT"
}

1. nodeMon 설치
npm i nodemon -D

2. babel 관련 패키지 설치
npm i @babel/core @babel/cli @babel/node @babel/preset-env -D

3. 서버 파일 및 설정 파일 생성하기
root폴더에 src폴더 생성하고 안에 server.js 생성
/src/server.js

root에 아래 파일 생성

nodemon.json
{
    "exec" : "babel-node src/server.js"
}

babel.config.json
{
    "presets": ["@babel/preset-env"]
}

package.json에 명령어를 추가할 수 있도록 scrpit 키를 추가
"script": {
    "dev":"nodemon"
  }

express 설치
Node.js 환경에서 API 서버를 개발할 때 사용할 수 있는 웹 프레임워크

터미널에 아래 입력
>npm i express

public 폴더 : 
페이지에 필요한 스크립트나 스타일시트를 보관
src>public>js>app.js 생성

pug 설치
>npm i pug
https://pugjs.org/api/getting-started.html

views 폴더 생성하고 뷰 만들기
src>views

view 보관
src>views>homg.pug

doctype html
html(lan="en")
    head 
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title clZoom
    body 
        h1 Welcome!
        p Hi Judith

        script(src="/public/js/app/js")
        img(src="/public/img/1.jpg")

server.js에 추가
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname+"/public"));


app.get("/", (req,res)=>res.render("home"));
app.get("/*", (req,res)=>res.redirect("/"));


nodemon 설정 추가
nodemon은 코드 변화를 감지해서 서버를 재시작해주는 기능이 있다
public 폴더 내부의 코드가 변할 때는 서버가 재시작되지 않도록 작성
nodemon.json에 코드 추가
"ignore":["src/public/*"],


MVP.css 적용하기
home.pug의 head에 추가
link(rel="stylesheet", href="https://unpkg.com/mvp.css")


웹 소켓을 이용한 실시간 기능 구현하기
익명으로 채팅을 주고 받는다
닉네임을 추가
채팅룸의 컨셉을 잡는다.

실시간 기능 구현 : 웹소켓
실시간 채팅, 알람, 등등 ...

      (요청)
사용자  -->    서버
       <-- 
      (응답) 


ws 패키지 설치하기
>npm i ws

server.js에 추가
import http from "http";
import WebSocket from "ws";


서버 실행하기
>npm run dev
http 서버 : 사용자에게 뷰 엔진을 이용해 만든 뷰, 정적 파일, 리다이렉션 제공
웹소켓 서버 : 실시간 채팅 가능
