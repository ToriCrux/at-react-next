import {
  Card, CardHeader, CardContent, CardActions, Avatar, Typography, Box, IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Post } from "../data/socialData";

interface Props { post: Post; }

export default function PostCard({ post }: Props) {
  return (
    // Card principal da postagem da timeline
    <Card
      sx={{
        mb: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Cabeçalho com avatar, autor e data */}
      <CardHeader
        sx={{ alignItems: "flex-start", pb: 0.5 }}
        avatar={<Avatar src={post.avatar} />}
        titleTypographyProps={{ fontWeight: 600, textAlign: "left" }}
        subheaderTypographyProps={{ color: "text.secondary", textAlign: "left" }}
        title={post.author}
        subheader={post.date}
      />

      {/* Imagem da postagem */}
      {post.image && (
        <Box
          sx={{
            px: 2,
            mx: "auto",
            width: { xs: 320, sm: 360, md: 420 },
            aspectRatio: "2 / 3",
            borderRadius: 1,
            overflow: "hidden",
            boxShadow: 1,
          }}
        >
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>
      )}

      {/* Conteúdo textual do post e lista de comentários */}
      <CardContent sx={{ textAlign: "left", pt: 1.5, px: 2 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>

        <Typography sx={{ mt: 1 }} variant="body2" color="text.disabled">
          {`💬 ${post.comments.length} comentários`}
        </Typography>

        {post.comments.map((c) => (
          <Typography key={c.id} variant="body2" sx={{ mt: 0.5 }}>
            <b>{c.author}:</b> {c.text}
          </Typography>
        ))}
      </CardContent>

      {/* Ações de curtir e compartilhar, com contadores */}
      <CardActions
        sx={{
          px: 2,
          pb: 2,
          pt: 0.5,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton color="error" size="small">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2">{post.likes}</Typography>

        <IconButton color="primary" size="small" sx={{ ml: 1 }}>
          <ShareIcon />
        </IconButton>
        <Typography variant="body2">{post.shares}</Typography>
      </CardActions>
    </Card>
  );
}
