import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InsertComment = ({ sendCommentDataHandler }) => {
  const date = new Date()
  const actualDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
  const [commentValues, setCommentValues] = useState({
    name: '',
    comment: '',
    date: actualDate,
  })


  const setCommentValuesHandler = ({ target: { value } }, name) => {
    const tempCommentValues = { ...commentValues };
    tempCommentValues[name] = value;
    setCommentValues(tempCommentValues)
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%'
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 2,
            p: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{
            mb: 2,
            borderBottom: 1
          }}>
            <Typography variant="h6" component="h2"
              sx={{
                pb: 1
              }}
            >
              Ingresa tu comentario
            </Typography>
          </Box>
          <Box sx={{
            mb: 2
          }}>
            <TextField id="outlined-basic" label="Name" value={commentValues.name} placeholder="Name" name='name' variant="outlined" onChange={(e) => setCommentValuesHandler(e, 'name')} />
          </Box>
          <Box sx={{
            mb: 2
          }}>
            <TextField sx={{
              width: '100%',
            }} id="outlined-basic" label="Comment" value={commentValues.comment} placeholder="Comment" variant="outlined" name='comment' multiline onChange={(e) => setCommentValuesHandler(e, 'comment')} />
          </Box>
          <Box sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <Button variant="contained" onClick={() => {
              sendCommentDataHandler(commentValues)
              setCommentValues({
                name: '',
                comment: '',
                date: actualDate,
              })
            }}>Enviar</Button>

          </Box>
        </Box>
        <Box sx={{
          pb: 2,
          pt: 2,
          pl: 2,
        }}>
          <Typography variant='h6'>
            Comentarios anteriores
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default InsertComment