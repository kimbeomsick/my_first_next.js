import Head from "next/head";
import {
  Button,
  Divider,
  Form,
  Header,
  List,
  TextArea,
} from "semantic-ui-react";

export default function About() {
  return <>
    <Header as="h3" style={{ paddingTop:40}} color="teal">
        회사 소개 
    </Header>
    <Divider></Divider>

    <List>
        <List.Item>
            <List.Icon  name="users"/>
            <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon  name="marker"/>
            <List.Content>New Yrok NY</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon  name="mail"/>
            <List.Content>
                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon  name="linkify"/>
            <List.Content>
                <a href="http://www/semantic-ui.com">semantic-ui.com</a>
            </List.Content>
        </List.Item>
    </List>
    <Header as="h3" style={{ paddingTop:40}} color="teal">
        문의 사항
    </Header>
    <Divider></Divider>
    <Form>
        <strong>재목</strong>
        <TextArea rows={3}></TextArea>
        <strong>내용</strong>
        <TextArea rows={5}></TextArea>
        <Button color="green" style={{marginTop:20}}>보내기</Button>
    </Form>
  </>;
}
