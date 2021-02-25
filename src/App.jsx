import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, resetList } from './redux/actions';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: auto;
    width: 500px;
    background-color: #fab6c6;
    text-align: center;
    border: 1px solid grey;
    border-radius: 14px;
    box-shadow: 2px 0px 8px 2px grey;
`
const Title = styled.h1`
    font-size: 30px;
`
const List = styled.div`
    margin: auto;
    width: 400px;
    height: 360px;
    border: 1px solid black;
    background-color: white;
    text-align: left;
    font-size: 20px;
`
const Content = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: column;
`
const Form = styled.form`
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Input = styled.input`
    width: 90%;
    padding: 12px 12px;
    margin: auto;
    border-radius: 5px;
    border: 1px solid gray;
`
const AddButton = styled.input`
    margin: auto;
    margin-top: 20px;
    width: 150px;
    height: 40px;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: #7df57f;
    box-shadow: 1px 1px 1px 1px grey;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
`
const SubmitButton = styled.input`
    background-color: #7df57f;
    margin: auto;
    width: 400px;
    height: 48px;
    border: 1px solid grey;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px grey;
    font-weight: bold;
    font-size: 16px;
`
const App = ({ wishList, dispatch }) => {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if (input && wishList.indexOf(input) === -1) {
            dispatch(addItem(input));
        }
        setInput('');
    }

    const handleDelete = (wish) => {
        dispatch(deleteItem(wish));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (wishList.length > 0) {
            alert('Wish list submitted to Santa!');
            dispatch(resetList());
        }
    }

    return (
        <Wrapper>
            <Title> MY WISHLIST</Title>
            <Content>
                <List>
                    {wishList.length ?
                        wishList.map((wish, index) => (
                            <ul key={index + wish} onClick={() => handleDelete(wish)}> {wish}</ul>
                        )) : null}
                </List>
                <Form onSubmit={handleAdd}>
                    <Input
                        type='text'
                        name='input'
                        value={input}
                        onChange={onChange}
                    />
                    <AddButton type='submit' value='Add' />
                </Form>
                <form onSubmit={onSubmit}>
                    <SubmitButton type='submit' value='Submit' />
                </form>
            </Content>
        </Wrapper>
    )
}


export default connect((state) => ({ wishList: state.wishList }))(App);

