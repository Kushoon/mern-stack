import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";

// protected user pages
import UserProfilePage from "./user/UserProfilePage";
import UserOrderPage from "./user/UserOrderPage";
import UserOrderDetailsPage from "./user/UserOrderDetailsPage";
import UserCartDetailsPage from "./user/UserCartDetailsPage";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// protected admin pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />

      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="*" element="Page does not exist 404" />

          {/*protected user routes*/}
          <Route element={<ProtectedRoutesComponent />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrderPage />} />
            <Route
              path="/user/card-details"
              element={<UserCartDetailsPage />}
            />
            <Route
              path="/user/order-details"
              element={<UserOrderDetailsPage />}
            />
          </Route>
        </Route>

        {/*protected admin routes*/}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route
            path="/admin/create-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/user/edit" element={<AdminEditUserPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
