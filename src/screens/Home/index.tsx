import React from "react";
import { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import { GAMES } from "../../utils/games";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";
import { Background } from "../../components/Background";

export function Home() {
  useEffect(() => {
    fetch("http://192.168.0.4:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  });
  const navigation = useNavigation();

  const [games, setGames] = useState<GameCardProps[]>([]);

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
