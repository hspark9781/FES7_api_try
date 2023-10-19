// // import { useState } from "react";
// import { useRecoilState } from "recoil";
// import axios from "axios";
// import { accountnameState, emailState, imgSrcState, introState, passwordState, usernameState } from "../atoms/user";

// const JoinPage = ({handlePage})=>{


//     const [username, setUsername] = useRecoilState(usernameState);
//     const [email, setEmail] = useRecoilState(emailState);
//     const [password, setPassword] = useRecoilState(passwordState);
//     const [accountname, setAccountname] = useRecoilState(accountnameState);
//     const [imgSrc, setImgSrc] = useRecoilState(imgSrcState);
//     const [intro, setIntro] = useRecoilState(introState);

//     const join = async (joinData) => {
//         console.log(joinData);
    
//         const reqUrl = 'https://api.mandarin.weniv.co.kr/user'
//         const res = await axios
//           .post(
//             reqUrl,
//             { user: joinData },
//             {
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           )
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((error) => {
//             console.log(error.response);
//           })
//         console.log(res);
//         // console.log(joinData);
//         // const res = await axios.post(reqUrl, {
//         //     joinData
//         // }).then((response) => {
//         //     console.log(`환영합니다! ${response}`);
//         // }).catch((error) => {
//         //     console.log(error.response);
//         // });
//             // const resData = await res.joinData;
//             // console.log(resData);
//         // console.log(res);
//     }

//     const inputUserName = (e) => {
//         setUsername(e.target.value);
//     }

//     const inputEmail = (e) => {
//         setEmail(e.target.value);
//     }

//     const inputPassword = (e) => {
//         setPassword(e.target.value);
//     }

//     const inputAccountname = (e) => {
//         setAccountname(e.target.value);
//     }

//     const inputIntro = (e) => {
//         setIntro(e.target.value);
//     }

//     const uploadImage = async (imageFile) => {
//         const baseUrl = "https://api.mandarin.weniv.co.kr/";
//         const reqUrl = baseUrl + "image/uploadfile";
//         // 폼데이터 만들기
//         const form = new FormData();
//         // 폼데이터에 값 추가하기
//         // 폼데이터.append("key", "value")
//         form.append("image", imageFile);

//         // 이미지 전송 코드 => 폼바디에 넣어서 요청하기
//         const res = await fetch(reqUrl, { // headers 적지 않기
//             method: "POST",
//             body: form
//         });
//         const json = await res.json();
//         // console.log(baseUrl + json.filename);
//         const imgUrl = baseUrl + json.filename;
//         setImgSrc(imgUrl);
//     }

//     const handleChangeImage = (e) => {
//         // 파일 가져오기
//         const imageFile = e.target.files[0];
//         uploadImage(imageFile);
//     }

//     const submitJoin = () => {
//         const joinData = {
//                 username : username,
//                 email : email,
//                 password : password,
//                 accountname : accountname,
//                 intro: intro,
//                 image: imgSrc
//         }
//         join(joinData);
//     }




//     return(
//         <>
//             <button type="button" onClick={handlePage}>로그인페이지로 돌아가기</button>
//             <section >
//                 <h2 >이메일로 회원가입</h2>
//                 <div >
//                     <label htmlFor="emailInput">이메일</label>
//                     <input type="email" id="emailInput" name="email" placeholder="이메일 주소를 알려주세요." onChange={inputEmail} value={email}/>
//                 </div>
//                 <div>

//                     <label htmlFor="passwordInput">비밀번호</label>
//                     <input type="password" name="password" id="passwordInput" placeholder="비밀번호를 설정해 주세요." onChange={inputPassword} value={password}/>
//                 </div>
//                 <button type="button" >다음</button>
//             </section>

//             <section>
//                 <h2 >프로필 설정</h2>
//                 <p>나중에 언제든지 변경할 수 있습니다.</p>
//                 <label htmlFor="profileImg">
//                     <img src={imgSrc} alt="" id="imagePre"/>
//                 </label>
//                 <input type="file" id="profileImg" name="image" accept="image/*" onChange={handleChangeImage} />
//                 <div >
//                     <label htmlFor="userNameInput">사용자 이름</label>
//                     <input type="text" id="userNameInput" name="username" placeholder="2~10자 이내여야 합니다." onChange={inputUserName} value={username}/>
//                 </div>
//                 <div >
//                     <label htmlFor="userIdInput">계정 ID</label>
//                     <input type="text" id="userIdInput" name="accountname" placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다." onChange={inputAccountname} value={accountname}/>
//                 </div>
//                 <div>
//                     <label htmlFor="userIntroInput">소개</label>
//                     <input type="text" id="userIntroInput" name="intro" placeholder="자신과 판매할 상품에 대해 소개해 주세요." onChange={inputIntro}/>
//                 </div>
//                 <button type="button" onClick={submitJoin}>감귤마켓 시작하기</button>
//             </section>
//         </>
//     )
// }

// export default JoinPage;