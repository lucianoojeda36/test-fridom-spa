import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Comment = ({ commentData }) => {
  return (
    <>{
      commentData.length > 0 ? commentData.map((e, index) =>
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 2,
            p: 2,
            mb: 2,
            width: '50%'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ pb: 3 }}>
                {e.name}
              </Typography>
              <Typography>
                {e.date}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ pl: 1 }}>{e.comment}</Typography>
            </Box>
          </Box>

        </Box>

      ) : <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Typography sx={{ opacity: 0.5 }}>No hay Comentarios </Typography>
      </Box>
    }

    </>
  )
}

export default Comment