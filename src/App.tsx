import "./App.css";
import { route } from "~routes/index";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, Modal } from "antd";
import PassVideo from "~components/PassVideo/PassVideo";
import { useModelStore, modelType } from "./store/store";
import { useEffect } from "react";
import { QueryClientProvider,QueryClient } from "react-query";
function App() {
  const routes = useRoutes(route);
  const { model, setModel } = useModelStore((state) => state);
  useEffect(() => {
    console.log("change");
  }, [model]);
  const client = new QueryClient()
  console.log("queryLient");
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
}

export default App;
