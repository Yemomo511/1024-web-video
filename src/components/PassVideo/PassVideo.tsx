import React, { FC, useMemo, useState } from "react";
import Upload from "antd/es/upload/Upload";
import css from "./index.module.css";
import type { UploadProps } from "antd";
import { UploadFileStatus } from "antd/es/upload/interface";
import imageUrl from "~/common/image";
import Icon from "~components/Icon/Icon";
import { Button } from "antd";
import ConfigProvider, { ConfigConsumer } from "antd/es/config-provider";
interface propsType {}
const PassVideo: FC<propsType> = () => {
  const [fileState, setFileState] = useState<UploadFileStatus | undefined>();
  const [file, setFile] = useState<any>(undefined);
  const [isUpload, setIsUpload] = useState(false);
  const uploadProps: UploadProps = useMemo(
    () => ({
      name: "file",
      multiple: false,
      //待后端配置或使用阿里云oss
      onDrop: (e) => {
        console.log(e);
      },
      beforeUpload: (file) => {
        setFile(file);
        setIsUpload(true);
        return false;
      },
    }),
    []
  );
  return (
    <div className={css.box}>
      <Upload {...uploadProps}
      className={css.topBox}
      >
        <div className={css.uploadBox}>
          <Icon src={imageUrl.header.uploadVideo}></Icon>
          <p style={{
            color:"white"
          }}>请选择上传的视频</p>
        </div>
      </Upload>
      <ConfigProvider
      theme={{
        components:{
            Button:{
                colorPrimary:"#403C56",
                colorLinkActive:"none"
            }
        }
      }}
      >
        <Button
          type="primary"
          loading={fileState == "uploading"}
          disabled={!isUpload}
          className={css.button}
          onClick={() => {
            setFileState("uploading");
            //假装上传，这里需要后端
            setTimeout(() => {
              setFile(undefined);
              setFileState("done");
            }, 1000);
          }}
        >
          {fileState == undefined && "上传"}
          {fileState == "uploading" && "上传中"}
          {fileState == "done" && "上传成功"}
        </Button>
      </ConfigProvider>
    </div>
  );
};
export default PassVideo;
