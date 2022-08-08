import React, { useState, useRef, useEffect } from "react";
import { Input, Flex, Text, Button,  }  from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { setIsLoggedIn } from "../slices/loginSlice";
import { useDispatch } from "react-redux";

const adminCredentials = { userName: "admin", password: "admin" };




export const LoginScreen = () => {
   
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const countRef =useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current){
    inputRef.current.focus();
    }
  }, []);

  const usernameHandler = (event: any) => {
    console.log("Event", event);
    countRef.current++;
    console.log("Count", countRef.current); 
    setUserName(event.target.value);
  };

  const loginHandler = (event: any) => {
    if (
      userName === adminCredentials.userName &&
      password === adminCredentials.password
    ) {
      dispatch(setIsLoggedIn(true));
      navigate("/characters")
    } else {
      dispatch(setIsLoggedIn(false));
    }
  };
  console.log("Component rendered with userName: " + userName);

  return (
    <Flex justify={"center"} direction="column" align={"center"}>
      <Text size={"lg"} mb={"1%"}>User name: </Text>
      
      <Input 
      mb={"1%"}
      ref={inputRef}
      type="text" 
      width={"50%"}
      value={userName} 
      onChange={usernameHandler} />
      
      <Text size={"lg"} mb={"1%"}>Password: </Text>
      
      <Input
        mb={"1%"}
        width={"50%"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme={"blue"} onClick={loginHandler}>Login</Button>
    </Flex>
  );
};
