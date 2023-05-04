import {
  Address,
  ButtonWrapper,
  Content,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error,
} from "../../../styles/boardsNew";
import {useState} from 'react'

export default function BoardsNewPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentError, setContentError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== "") {
      setWriterError("")
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
  };

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
    if(event.target.value !== ""){
      setSubjectError("")
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    if(event.target.value !== ""){
      setContentError("")
    }
  };

  const onClickSubmit = () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!subject) {
      setSubjectError("제목을 입력해주세요.");
    }
    if (!content) {
      setContentError("내용을 입력해주세요.");
    }
    if (writer && password && subject && content) {
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeSubject} />
        <Error>{subjectError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Content placeholder="내용을 작성해주세요." onChange={onChangeContent} />
        <Error>{contentError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}