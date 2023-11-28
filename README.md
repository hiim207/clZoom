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

터미널
>npm i express



