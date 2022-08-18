import InsertComment from "../components/insertComment/insertComment"
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Comments from "../components/comments/Comments";
import theme from "../theme/theme";
import { useState } from "react";

const Home = () => {
  const [commentData, setCommentData] = useState([])
  const sendCommentDataHandler = (data) => {
    const tempCommentData = [...commentData, data]
    setCommentData(tempCommentData)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container fixed sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          p: 5,
        }}>
          <InsertComment sendCommentDataHandler={sendCommentDataHandler} />
          <Comments commentData={commentData} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Home
