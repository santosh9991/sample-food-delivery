import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it('should render header component with login button',()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', {name: 'Login'});
    expect(loginButton).toBeInTheDocument();
})

it('should render header component with 0 cart items',()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByText('Cart (0 items)');
    expect(loginButton).toBeInTheDocument();
});


it('should render header component with cart text',()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
});

it('should check onclick of Login to Logout',()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );
    const cartText = screen.getByText(/Cart/);
    expect(cartText).toBeInTheDocument();
});

it('should render header component with login button',()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', {name: 'Logout'})
    expect(logoutButton).toBeInTheDocument();
});