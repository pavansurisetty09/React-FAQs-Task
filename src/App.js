import React, { useEffect, useState } from "react";
import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";
import { commonFaqsData, mCashFaqsData } from "./Faqs";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`
  }
}));

const FaqSimple = () => {
  const { classes } = useStyles();
  const [mCashData, setMCashData] = useState([]);
  useEffect(() => {
    let output = commonFaqsData.filter(
      (faq, i) => typeof faq.answer === "object" && faq.answer
    );
    setMCashData(output);
  }, []);

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        COMMISSION FAQ
      </Title>

      <Accordion variant="separated">
        {commonFaqsData.map((faq, i) => (
          <Accordion.Item className={classes.item} value={`${faq.id}`}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>
              {typeof faq.answer !== "object" ? (
                faq.answer
              ) : (
                <ol type="a">
                  {Object.entries(faq.answer).map((faq) => (
                    <li>{faq[1]}</li>
                  ))}
                </ol>
              )}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Title align="center" className={classes.title}>
        MCASH FAQ
      </Title>

      <Accordion variant="separated">
        {mCashFaqsData.map((faq, i) => (
          <Accordion.Item className={classes.item} value={`${faq.id}`}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>
              {typeof faq.answer !== "object" ? (
                faq.answer
              ) : (
                <ol type="a">
                  {Object.entries(faq.answer).map((faq) => (
                    <li>{faq[1]}</li>
                  ))}
                </ol>
              )}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FaqSimple;
