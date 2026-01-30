import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { getTopicTranslation } from "../api/ollama";
import { StatusBar, Platform } from "react-native";


export default function TopicsScreen({ route }: any) {
  const { id } = route.params;

  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);

    const topics: any = {
    Wealth_and_Social_Class: {
      title: "Wealth and Social Class",
      shortDescription:
        "Багатство та соціальний клас - це тема, з якої ви дізнаєтесь такі слова як дворянство, превілеї, достаток тощо.",

      images: {
        main: require("../../assets/wealth_and_social_class/wealth.jpg")
      },

      words: [
        "accumulate - накопичувати ",
        "affluence - достаток",
        "elite - еліта",
        "impoverish - збіднювати",
        "luxury - розкіш",
        "nobility - дворянство",
        "pretige - престиж",
        "privileged - превілейований",
        "prosper - процвітати",
        "wealth - богатство",
        "working class - робітничий клас"
      ],

      text: `
        Прочитайте текст, перекладіть його самостійно. Для перевірки себе скористайтеся AI-помічником.

        The United States is not the land of equal opportunity.There are no titles
        of nobility as in Europe, but astounding affluence is passed on in
        privileged families, and this makes all the difference. Studies
        in the 1970s found that a child of the elite and a child of the
        working class may start out with similar intelligence and
        drive, but the rich child is about 30 times more likely to
        prosper. The rich child goes to high-prestige schools, where
        his or her education may be only slightly above average, but
        where the child accumulates friendships with future leaders.
        The privileged child becomes comfortable with luxury and is
        at ease in situations where powerful people meet.The working-class child
        from a less-prestigious college is not likely to wind up impoverished, but
        neither is he or she likely to attend many parties of Yale or Vassar alumni.
      `,
    },

    Financial_Systems: {
      title: "Financial Systems",
      shortDescription: "Фінансові системи - це тема, що ознайомить вас із словами капітал, інфляція, субсидія тощо.",

      images: {
        main: require("../../assets/financial_systens/FinancialSystems.jpeg")
      },

      words: [
        "commodity - товар",
        "decline - зниження",
        "equity - капітал",
        "inflation - інфляція",  
        "net - чистий дохід",
        "per capita - на душу населення",
        "requlate - регулювати",
        "subsidy - субсидія",
        "tangible - матеріальний",
        "allocate - призначати"
      ],

      text: `
        Прочитайте текст, перекладіть його самостійно. Для перевірки себе скористайтеся AI-помічником.
        
        The great unsettled question of economics is: “How much should the
        government regulate business?” Conservatives generally argue for a
        Financial Systems 99
        decline in government involvement, but they favor certain subsidies to
        farmers, steelmakers, or airplane manufacturers. Some conservatives also
        see no conflict between their small-government views and their eagerness
        for the government to allocate more money for roads into national forests.
        The net result of these incursions into national forests is a tangible
        infrastructure that helps some companies but not the public. Publicly
        owned trees, land, and oil become commodities from which a
        few private companies (many owned by small-government
        conservatives) profit. No per capita benefit goes to the
        American people, aside perhaps from the brief anti-inflation
        effect that comes with new oil exploration.
      `,
    },

    War_and_Conquest: {
      title: "War and Conquest",
      shortDescription: "Війна і завоювання - це тема з якої вам стануть відомі такі слова як порушення, анексія, супротив тощо.",

      images: {
        main: require("../../assets/war_and_conquest/War.jpg")
      },

      words: [
        "annex - анексувати",
        "apex - вершина",
        "collapse - руйнування",
        "conquest - заввоювання",  
        "devise - розроблювати",
        "invasive - агресивний",
        "prevailing - переважаючий",
        "resist - чинити супротив",
        "severely - сурово",
        "violation - порушення"
      ],

      text: `
        Прочитайте текст, перекладіть його самостійно. Для перевірки себе скористайтеся AI-помічником.
        
        The Roman conquest of North Africa is, in the prevailing view, less
        interesting than Rome’s European adventures. In truth, one of the first
        88 Society
        lands Rome annexed beyond the Italian peninsula was the area around
        Carthage in North Africa. Carthage and Rome had been in conflict (called
        the Punic Wars) since 264 BCE for control of trade along the
        Mediterranean coast. In 202 BCE, during the Second Punic War, the
        Carthaginian general Hannibal devised a clever plan, in violation of most
        military wisdom, to march through the high Alps to attack the Roman
        heartland. The cold weather and steep terrain severely stressed
        Hannibal’s forces, many of whom rode elephants.The Romans resisted
        Hannibal’s attacks, and his bold invasion force collapsed.
        In the end, Rome finished off Carthage in the Third Punic
        War (149–146 BCE). At its apex in 117 CE, Rome
        controlled all of North Africa and territories from the
        Persian Gulf to Britain.
      `,
    },
};

const topic = topics[id];

return (
  <ScrollView
  style={styles.container}
  contentContainerStyle={{ paddingBottom: 80 }}
>


    {topic.images.main && (
      <Image
        source={topic.images.main}
        style={styles.mainImage}
        resizeMode="cover"
      />
    )}

    <Text style={styles.title}>{topic.title}</Text>

    <TouchableOpacity
      style={styles.button}
      onPress={async () => {
        setTranslation("");
        setLoading(true);

        const result = await getTopicTranslation(topic.text);
        setTranslation(result);
        setLoading(false);
      }}
    >
      <Text style={styles.buttonText}>Отримати переклад тексту від AI-помічника</Text>
    </TouchableOpacity>

    {(loading || translation.length > 0) && (
      <View style={styles.summaryBox}>
        {loading ? (
          <Text style={styles.loading}>Обробка...</Text>
        ) : (
          <Text style={styles.summaryText}>{translation}</Text>
        )}
      </View>
    )}

    <Text style={styles.label}>Текст:</Text>
    <Text style={styles.text}>{topic.text}</Text>

    <Text style={styles.label}>Cлова:</Text>
    {topic.words.map((word: string, index: number) => (
      <Text key={index} style={styles.cloneItem}>• {word}</Text>
    ))}

  </ScrollView>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1525",
    padding: 16
  },

  mainImage: {
    width: "100%",
    height: 230,
    borderRadius: 12,
    marginBottom: 16,
    marginTop: Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 10 : 30,
  },

  title: {
    color: "#E6D9FF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left"
  },

  button: {
    backgroundColor: "#9D7BC9",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },

  summaryBox: {
    backgroundColor: "#2A1F3A",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5C3D7D",
    marginBottom: 20
  },

  loading: {
    color: "#9D7BC9",
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic"
  },

  summaryText: {
    color: "#E6D9FF",
    fontSize: 16,
    lineHeight: 22
  },

  label: {
    color: "#9E8BB5",
    fontSize: 18,
    marginTop: 12,
    marginBottom: 4
  },

  text: {
    color: "#D0C2E6",
    fontSize: 16,
    lineHeight: 22
  },

  cloneItem: {
    color: "#E6D9FF",
    fontSize: 16,
    marginLeft: 8,
    marginVertical: 2
  }
});