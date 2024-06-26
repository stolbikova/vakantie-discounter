import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { GameContext } from "@state/GameContext";
import {
  Table,
  Button,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

import styles from "@pages/index.module.css";

export default function Scoreboard() {
  const [isClientReady, setIsClientReady] = useState(false);
  const { state } = useContext(GameContext);
  const router = useRouter();
  useEffect(() => {
    setIsClientReady(true);
  }, []);

  const handleClickPlayScreen = () => {
    router.push("/game");
  };
  const handleClickWelcomeScreen = () => {
    router.push("/welcome");
  };

  if (!isClientReady) return <div>Loading...</div>;

  const current = state.data[state.data.length - 1];
  return (
    <div className={styles.container} data-testid="scoreboard-page">
      <Head>
        <title>Fox game</title>
      </Head>

      <main>
        <h1 className={styles.title}>Scoreboard</h1>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...state.data]
              .filter((i) => i.name)
              .sort((a, b) => (a.score > b.score ? -1 : 1))
              .map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className={current === row ? styles.activeRow : ""}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    data-testid={`name-${idx}`}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right" data-testid={`score-${idx}`}>
                    {row.score}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <div className={styles.buttonWrap}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            onClick={handleClickWelcomeScreen}
          >
            To Welcome Screen
          </Button>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            onClick={handleClickPlayScreen}
          >
            PLAY!
          </Button>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
