import "./App.css";
import { route } from "~routes/index";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, Modal, Popover } from "antd";
import PassVideo from "~components/PassVideo/PassVideo";
import { useModelStore, modelType } from "./store/store";
import { useEffect } from "react";
function App() {
  const routes = useRoutes(route);
  const { model, setModel } = useModelStore((state) => state);
  useEffect(() => {
    console.log("change");
  }, [model]);
  return (
    <div className="css-all-box">
      {routes}
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#292b35",
            },
            Upload: {
              colorPrimary: "white",
              actionsColor: "white",
            },
          },
        }}
      >
        {
          <Modal
            open={model == modelType.UPLOAD}
            footer={null}
            onCancel={() => {
              setModel(modelType.DEFAULT);
            }}
          >
            <PassVideo></PassVideo>
          </Modal>
        }
      </ConfigProvider>
    </div>
  );
}

export default App;
