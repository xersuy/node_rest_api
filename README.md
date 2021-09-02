# node_rest_api

## 설치 & 세팅

`npm packages`와 `Extensions`를 설치한다.

### **Package Install**

```
    $ npm install

```

### **Extensions Install**

`vscode`를 사용시 `Open Workspace`를 이용하여 `node_rest_api.code.workspace` 파일을 오픈한다.
오픈시 `vscode` 하단에 `Recommendations Extensions` 알람창이 나타나면 `install`를 클릭하여 설치한다.

`xersuy`가 개인적으로 추천하는 `Extensions`이다.

### **Environment variable setting**

`.env.development`  
`.env.production`  

두개의 환경변수 파일(`.env`)이 존재하는데, 없다면 `node_rest_api` 디렉토리 내부에 생성해준다.  
`.env.development`은 개발시 사용하며, `.env.production`은 운영할 때 사용한다.  
보안을 위해서 `gitignore`에 꼭 추가 해야되며, 내부의 내용은 따로 **수동**으로 관리한다.


---

## 실행

`package.json`에 실행 명령어를 참고.

**개발시**
```
    $ npm run dev
```

**운영시**
```
    $ npm run prod
```

---
## Swagger UI 사용

현재 프로젝트에는 `Swagger UI`를 이용하여 `API 목록 및 테스트`를 UI로 확인을 할 수 있다.
브라우저를 이용하여 `IP_ADDRESS:PORT/api-docs` 확인 및 테스트를 할 수 있다.

**예시** 
```
    http://localhosts:80/api-docs
```



