import React, { useState } from "react";
import { Badge, Button, Card, Modal } from "antd";
import { AiOutlineYoutube } from "react-icons/ai";

const Media = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="main-card relative mb-5">
       <Badge.Ribbon text="Display Date ⏲" className=' md:px-8 ' >
        <Card

          hoverable
        //   style={{ width: 240 } }
    
          
          cover={
            <img
              alt="Video Thumbnail"
              src="https://i.ytimg.com/an_webp/pfasFhMx0cA/mqdefault_6s.webp?du=3000&sqp=CKDmhKgG&rs=AOn4CLBe1QXFprQ71oua7ijbsMKDahteSw"
            className='md:w-full h-[200px] p-3 bg-slate-100'
              />
          }
          className='opacity-75  hover:opacity-100   mt-5 hover:scale-95 md:m-1  md:w-[300px]'
        >
            
          <button
            className="absolute top-[30%] left-[35%] bg-blue-300 p-1 px-3 rounded-lg"
            onClick={() => setModalVisible(true)}
          >
            <AiOutlineYoutube size={30} className="" />
          </button>
          <Card.Meta
            className="font-bold"
            description="Maulana Bashir Farooq Qadri Message | An Appeal to Pakistanis and Overseas | #Saylani #Dollar #2023"
          />
        </Card>
         </Badge.Ribbon>
        <Modal
          title="Video"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6Yk8fFNf5hg?si=YMjd5Y_UNkJTOcUo"
            title="YouTube video player"
            frameborder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal>
      </div>
    </>
  );
};

export default Media;
