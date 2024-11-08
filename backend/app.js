const { app, sequelize, config } = require('./config/config');  // Đảm bảo đường dẫn là chính xác
const userRoutes = require('./routes/userRoutes'); // P56c6
const questionRoutes = require('./routes/questionRoutes'); // P9600
const express = require('express');
const path  = require('path');  

const cors = require('cors');

app.use(cors());
app.use('/resource/images', express.static(path.join(__dirname,"resource", 'images')));
app.use('/api/users', userRoutes); // P4517
app.use('/api/questions', questionRoutes); // P9600

// Đồng bộ với cơ sở dữ liệu và khởi động server
sequelize.sync()
  .then(() => {
    app.listen(config.server.port,'0.0.0.0', () => {
      console.log(`[Y.Ta] - Server đang chạy trên cổng ${config.server.port}`);
    });
  })
  .catch(err => {
    console.error('Lỗi khi đồng bộ với cơ sở dữ liệu:', err);
  });
