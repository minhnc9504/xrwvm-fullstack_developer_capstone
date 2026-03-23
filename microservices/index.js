const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Dữ liệu "giả" để bạn có cái mà chụp ảnh màn hình
const dealers = [
  {
    "id": 1, "city": "El Paso", "state": "Texas", "st": "TX", 
    "address": "3 Ecker Junction", "zip": "79905", 
    "lat": 31.7609, "long": -106.401, 
    "short_name": "Holden", "full_name": "Holden-Quigley"
  },
  {
    "id": 2, "city": "Minneapolis", "state": "Minnesota", "st": "MN",
    "address": "9 Shelbury Parkway", "zip": "55446",
    "lat": 45.0934, "long": -93.4735,
    "short_name": "Leuschke", "full_name": "Leuschke, Gislason and Dressler"
  },
  {
    "id": 3, "city": "Topeka", "state": "Kansas", "st": "KS", 
    "address": "789 Sunflower Blvd", "zip": "66601", 
    "lat": 39.0473, "long": -95.6752, 
    "short_name": "Topeka Ford", "full_name": "Ford Dealership of Topeka"
  }
];

// API lấy tất cả Dealers (Task 9)
app.get('/fetchDealers', (req, res) => {
  console.log("Đã nhận yêu cầu lấy danh sách Dealers");
  res.json(dealers);
});

// API lọc theo bang (Task 11) - Dùng để chụp ảnh lọc Kansas
app.get('/fetchDealers/:state', (req, res) => {
  const state = req.params.state;
  const filtered = dealers.filter(d => d.state === state);
  res.json(filtered);
});

// API lấy chi tiết 1 Dealer (Task 10)
app.get('/fetchDealer/:id', (req, res) => {
    const dealer = dealers.find(d => d.id == req.params.id);
    res.json(dealer ? [dealer] : []);
});

app.listen(3000, () => {
  console.log('--- MICROSERVICE ĐANG CHẠY KHÔNG CẦN DATABASE ---');
  console.log('Truy cập thử: http://localhost:3000/fetchDealers');
});