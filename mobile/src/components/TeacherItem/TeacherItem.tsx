import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";

const avatar = {
  uri:
    "https://coisasdatv.com.br/wp-content/uploads/2020/07/severus-snape-3-by-speedportraits-d75hn8x_z1sn.jpg",
};

import whatsAppIcon from "../../assets/images/icons/whatsapp.png";
import heart from "../../assets/images/icons/heart-outline.png";

import {
  Container,
  Header,
  Avatar,
  TextContent,
  Strong,
  Course,
  Bio,
  Footer,
  Price,
  Button,
  //WhatsAppIcon,
} from "./styles";

export default function TeacherItem() {
  return (
    <ScrollView>
      <Container>
        <Header>
          <Avatar source={avatar} />
          <View>
            <Strong>Severus Snape</Strong>
            <Text>Defence Against the Dark Arts</Text>
          </View>
        </Header>
        <TextContent>
          I served as Potions Master (1981-1996), Defence Against the Dark Arts professor
          (1996-1997), and Headmaster (1997-1998) of the Hogwarts School of Witchcraft and Wizardry
          as well as a member of the Order of the Phoenix and a Death Eater.
          {"\n"}
          {"\n"}I can teach you how to be a great warlock as me.
        </TextContent>
        <Price>Price / hour $200.00</Price>
        <Footer>
          <Button>
            <Image source={heart} />
          </Button>
          <Button>
            <Image source={whatsAppIcon} />
            <Text>Get in touch</Text>
          </Button>
        </Footer>
      </Container>
    </ScrollView>
  );
}
