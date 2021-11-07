import React from "react"
import { Button, Center, NativeBaseProvider } from "native-base"
import { fontWeight } from "styled-system"
export const Title = () => {
  return (
    <>
      <Button size = "lg" mt = {20} variant = "ghost" onPress={() => console.log("hello world")} 
      _text={{
        color: "black",
        fontSize: "5xl",
        fontWeight: "bold"
      }}>College Market</Button>
    </>
  )
}

export default () => {
  return (
        <Title/>
  )
}
