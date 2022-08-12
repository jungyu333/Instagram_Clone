# :computer: Instagram Clone<br/>

### React를 이용하여 인스타그램 pc 버전 홈페이지의 레이아웃을 클론해본 프로젝트입니다.<br/><br/>
#### React 자체를 처음 사용해보았기 때문에 기능 구현 위주 보다는 레이아웃을 그려보는것에 더 의의를 둔 프로젝트입니다<br/>
#### 반응형화면은 아직 구현하지 않았고 Pc 데스크탑 화면의 레이아웃을 구현해보았습니다

# :hammer: Tech
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<br/> 
#### React를 사용하였으며 css 스타일은 styled-components를 사용하여 CSS-in-js 로 구현하였습니다
# :file_folder: Directory

```
src
 ┣ components
 ┃ ┣ Card.js
 ┃ ┣ EmailSettingsContainer.js
 ┃ ┣ ESButtonBox.js
 ┃ ┣ Footer.js
 ┃ ┣ Friend.js
 ┃ ┣ Layout.js
 ┃ ┣ PopUp.js
 ┃ ┣ PopUpButton.js
 ┃ ┣ SideMenu.js
 ┃ ┗ Story.js
 ┣ Routes
 ┃ ┣ ContactManagement.js
 ┃ ┣ Direct.js
 ┃ ┣ EmailSettings.js
 ┃ ┣ Help.js
 ┃ ┣ Home.js
 ┃ ┣ PasswordChange.js
 ┃ ┣ Profile.js
 ┃ ┣ ProfileChange.js
 ┃ ┣ PushNotice.js
 ┃ ┗ Website.js
 ┣ styles
 ┃ ┗ globals.js
 ┣ App.js
 ┣ index.js
 ┗ Router.js
 ```
 <br/>
 
 #### 파일 구조의 경우 페이지가 되는 Router를 나누고 각 페이지에 필요한 컴포넌트들을 구현해 보았습니다 <br/>
 #### 아직 atomic 하게 컴포넌트들이 구현 되어있지는 않지만 점차 공부를 해나가면서 리팩토링을 해보면 좋을것 같았습니다 <br/>
 
 # :newspaper: Page
 
 ### Home
 페이지의 상단 네비게이션 바의 경우 공통 레이아웃 컴포넌트로 만들어 필요로 하는 페이지에 사용을 할 수 있게 하였습니다 
 ![1](https://user-images.githubusercontent.com/96876293/184279544-48e72fdf-0fb7-4185-96ba-31fe72371b86.png)

  <br/><br/>
 사이드 메뉴의 팔로잉버튼에 이벤트를 등록시켜 클릭 시 텍스트가 변경되는 이벤트를 만들어 보았습니다
 
![ezgif com-gif-maker](https://user-images.githubusercontent.com/96876293/184280328-9d0aa602-475c-419a-9509-366eb1fa3adc.gif)

  <br/><br/>
  ### Direct
  instagram의 다이렉트 메시지 화면입니다 <br/>
  왼쪽의 친구 리스트의 경우 Atomic 하게 컴포넌트를 만들어 만약 실제 데이터를 렌더링 할때 재사용이 용이하게 구현하였습니다 <br/>
  ![1](https://user-images.githubusercontent.com/96876293/184280662-0b73b8d0-ab72-49ca-94f3-cb8c36a2e4af.png)

  <br/><br/>
  
  ### Profile
  instagram의 개인 프로필 화면 페이지 입니다 <br/>
  useState 훅을 활용하여 현재 클릭 상태에 따른 상태값을 이용하여 화면 렌더링을 바꾸는 연습을 해보았습니다
  
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/96876293/184281446-35d3c0b6-08d7-4536-bb1d-1d87e2fbda37.gif)

  <br/><br/>
  설정 아이콘을 클릭할 시 모달창을 띄우도록 구현하였습니다
  ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/96876293/184281720-c65f3885-8c06-46dc-a38a-82ccbe40db4a.gif)

<br/><br/>

### ProfileChange
인스타그램의 개인 프로필 편집 페이지입니다

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/96876293/184282878-e3329288-4d15-48fe-9236-f324553f68b6.gif)

# :bulb: Think About

코드 구현에서 컴포넌트의 재사용성, 유지 보수 측면을 고려한 개발이 이루어지지 않은 것 같습니다
좀더 공부가 진행되어진다면 유지 보수, 재사용성을 높일 수 있는 코드를 구현할 수 있을것입니다.

```
 <Option>
              <Link
                to={"/ProfileChange"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 프로필 편집 </p>
              </Link>
              <Link
                to={"/PasswordChange"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 비밀번호 변경 </p>
              </Link>
              <Link
                to={"/Website"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 웹 및 앱사이트 </p>
              </Link>
              <Link
                to={"/EmailSettings"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 이메일 알림 </p>
              </Link>
              <Link
                to={"/PushNotice"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 푸시 알림 </p>
              </Link>
              <Link
                to={"/ContactManagement"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 연락처 관리</p>
              </Link>
              <Link
                to={"/Help"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 도움말 </p>
              </Link>
            </Option>
```

예를 들면 이 코드는 현재 프로필 편집 페이지에서 왼쪽 사이드 메뉴 부분의 코드입니다<br/>
이러한 부분들은 컴포넌트로 구조화 하여 재사용성이 높은 코드로 고칠 수 있을 것입니다.

공부가 좀더 진행 된다면 레이아웃만 구현하는 것이 아닌 데이터를 직접 사용하면서 api 통신을 해 볼수 있을것 같습니다
