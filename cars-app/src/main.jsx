import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import {Provider} from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


// Import the generated route tree
import { routeTree } from "./routeTree.gen";

library.add(fas); 

// Create a new router instance
const router = createRouter({ routeTree });

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </Provider>
        </StrictMode>
    );
}