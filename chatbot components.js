# chatbot
프론트엔드 챗봇 코드
import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { AiOutlineMessage, AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [steps, setSteps] = useState([]);


  const handleChatbotClick = () => {
    setIsOpen(true);
  };

  const handleChatbotClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setSteps([
      {
        id: 'intro',
        message: '안녕하세요! 한세대학교 챗봇 입니다 무엇을 도와드릴까요?',
        trigger: 'options',
      },
      {
        id: 'options',
        options: [
          { value: '복학 신청방법', label: '복학 신청방법', trigger: '복학 신청방법' },
          { value: '졸업 이수학점', label: '졸업 이수학점', trigger: '졸업 이수학점' },
          { value: '예비군 신청 방법', label: '예비군 신청 방법', trigger: '예비군 신청 방법' },
          { value: '장학금 종류', label: '장학금 종류', trigger: '장학금 종류' },
          { value: '증명서 발급방법', label: '증명서 발급방법', trigger: '증명서 발급방법' },
        ],
      },
      {
        id: '복학 신청방법',
        message:
          '학사행정시스템 -> 학생서비스 -> 학적관리 -> 복학신청 -> 조회-신청,추가(군휴학자의 경우 전역증 스캔하여 파일첨부)- 신청해 주세요.',
        end: true,
      },
      {
        id: '졸업 이수학점',
        message: '간호학과는 140이며 나머지 학과는 130학점입니다.',
        end: true,
      },
      {
        id: '예비군 신청 방법',
        message: '학사행정시스템 -> 병무관리 -> 예비군편입신청 -> 추가버튼을 눌러 신청해주세요.',
        end: true,
      },
      {
        id: '장학금 종류',
        message: '성적장학금, Advance장학금, 신입생장학금, 교직원자녀장학금, 봉사장학금, 언론장학금, 보훈장학금이 있습니다.',
        end: true,
      },
      {
        id: '증명서 발급방법',
        message: '인터넷 발급, 학교 방문 발급, 팩스 민원 발급, 해외 우편 발급이 있습니다.',
        end: true,
      },
    ]);
  }, []);

  return (
      <div>
        {isOpen ? (
          <div className="chatbot-container">
            <ChatBot
              steps={steps}
              opened
              headerTitle={
                <div>
                  <AiOutlineMenu className="menu-icon" />
                    챗봇
                </div>
              }
              recognitionEnable={true}
              speechSynthesis={{ enable: true, lang: 'ko' }}
            />
            <button className="close-button" onClick={() => handleChatbotClose()}>
              <IoCloseSharp />
            </button>
          </div>
        ) : (
          <button className="chat-icon" onClick={() => handleChatbotClick()}>
            <AiOutlineMessage />
          </button>
        )}
      </div>
  );
};


export default ChatbotComponent;

