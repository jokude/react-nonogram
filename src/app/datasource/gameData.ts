import { IDataCategory, IDataLevel } from "./types";

const levels5x5: IDataLevel[] = [
  {
    id: 1,
    grid: "AwRl+U0lq3ZA",
    title: "Battery",
  },
  {
    id: 2,
    grid: "AzCMLV08rlpA",
    title: "Bell",
  },
  {
    id: 3,
    grid: "AwRm5S1HS8ZA",
    title: "Candy",
  },
  {
    id: 4,
    grid: "AwRjrSQrs4g=",
    title: "CD",
  },
  {
    id: 5,
    grid: "Aw4RnMvEImpSA===",
    title: "Cellphone",
  },
  {
    id: 6,
    grid: "Iw0BmDXMuo==",
    title: "Face",
  },
  {
    id: 7,
    grid: "AwRhwt1LQz5A",
    title: "Flag",
  },
  {
    id: 8,
    grid: "AwRjosurKA==",
    title: "Ghost",
  },
  {
    id: 9,
    grid: "AwRlpS2ivMg=",
    title: "Hash",
  },
  {
    id: 10,
    grid: "AwRjuTy81kg=",
    title: "Headphones",
  },
  {
    id: 11,
    grid: "AwRl7E2Dx6g=",
    title: "Heart",
  },
  {
    id: 12,
    grid: "AwRj1S2nZI==",
    title: "Lock",
  },
  {
    id: 13,
    grid: "Iw0BgkLV3I==",
    title: "Monitor",
  },
  {
    id: 14,
    grid: "AwRjNZI01uxA",
    title: "Music",
  },
  {
    id: 15,
    grid: "AzCMJV0suuRA",
    title: "Music2",
  },
  {
    id: 16,
    grid: "AzCMJc1Gq7xA",
    title: "Plane",
  },
  {
    id: 17,
    grid: "IzAM5dTLumTCA===",
    title: "Phone",
  },
  {
    id: 18,
    grid: "IwBjosVaOfZA",
    title: "Scissors",
  },
  {
    id: 19,
    grid: "IwBjeTVEciJA",
    title: "Shopping Cart",
  },
  {
    id: 20,
    grid: "AzCMNTLafcJA",
    title: "Star",
  },
  {
    id: 21,
    grid: "Aw0RmCJNb3JiA===",
    title: "Sunglasses",
  },
  {
    id: 22,
    grid: "AzCMNTLGfNpA",
    title: "Trash",
  },
  {
    id: 23,
    grid: "IzAMJcw0rPRA",
    title: "T-Shirt",
  },
  {
    id: 24,
    grid: "IwgM/ZTbOqFA",
    title: "Wifi",
  },
];

const levels10x10: IDataLevel[] = [
  {
    id: 1,
    grid: "AwkRjUoyuD5wTWzIMcx8vZXPA1OIA===",
    title: "Bench",
  },
  {
    id: 2,
    grid: "Aw4RjVJaNH7hnJyLQelSsd98LRQjEIA=",
    title: "Bomb",
  },
  {
    id: 3,
    grid: "AwiM40ylnP5gZRjYzUhsubvmdDFQoA==",
    title: "Box",
  },
  {
    id: 4,
    grid: "AzCMY81HZ66wiFkT3cr4reUtVTROIA==",
    title: "Calendar",
  },
  {
    id: 5,
    grid: "Aw14IweJX9RtRlqsWtrK1ClsW4CJQA==",
    title: "Camera",
  },
  {
    id: 6,
    grid: "Iw14AxdUh6TjacH0s2HNnb9mshQA",
    title: "Comment",
  },
  {
    id: 7,
    grid: "Aw14IwS25WUbBVX2jUCbe+nWuG+8h0QA",
    title: "Cutlery",
  },
  {
    id: 8,
    grid: "Iw14AyROSU1qBi5rFajXXJpy8mcx4oQA",
    title: "Disk",
  },
  {
    id: 9,
    grid: "Aw10IweLd7yk48EKammUZTPOGUwQA===",
    title: "Hand",
  },
  {
    id: 10,
    grid: "Aw1kIzBXj93jUSnVWjz2wTy2eCQA",
    title: "House",
  },
  {
    id: 11,
    grid: "Aw1kIxl2eEMaBwVsRpmotXPqMu44QA==",
    title: "Invader",
  },
  {
    id: 12,
    grid: "Aw4RgtRLSyHic2DE2srGd2rbGCTIA===",
    title: "Mouse",
  },
  {
    id: 13,
    grid: "AwRj7VmmWubyY5DELbLKMqv9UCcYIA==",
    title: "Paper",
  },
  {
    id: 14,
    grid: "Aw0Rg12mTbLHkl9l1VNLbozqJPEIA===",
    title: "Paperclip",
  },
  {
    id: 15,
    grid: "AzCMpcUi16EPFOdkXajYbXprWFA40IA=",
    title: "People",
  },
  {
    id: 16,
    grid: "Iw4Bgzw6rbb0jZil1ZrKebRsIA==",
    title: "Price",
  },
  {
    id: 17,
    grid: "AwRj7ZSnui4llJ9xuaC2e9bSPYIA",
    title: "Printer",
  },
  {
    id: 18,
    grid: "AwRhw1yyd+pkksSItc8ro7o7adXImIA=",
    title: "Restroom",
  },
  {
    id: 19,
    grid: "AwiM9Es7atgyWG8WPpcLsdXDAnVIA===",
    title: "Smile",
  },
  {
    id: 20,
    grid: "Aw1iMld5huTo5tipIjar2tnOc+cQA===",
    title: "Teaching",
  },
  {
    id: 21,
    grid: "Aw1kIyelWEMUh5muI1T3N3xQA===",
    title: "Television",
  },
  {
    id: 22,
    grid: "AwiM/Eo0rC7xrYzKNSx6NexgqIA=",
    title: "Thunder",
  },
  {
    id: 23,
    grid: "Aw1sIweLceVuaV6NQho452m8URxEQA==",
    title: "Warning",
  },
  {
    id: 24,
    grid: "Aw1sIweLceVuaV6NQho452m8URxEQA==",
    title: "Wrench",
  },
];

const level15x15: IDataLevel[] = [
  {
    id: 1,
    grid: "AwiMedJHb/rSlWzEpmtcsU6AwogxBVEvU46m2u+isnBwyF4IA===",
    title: "Birthday Cake",
  },
  {
    id: 2,
    grid: "Aw0iMltyX4wvOMW3qZUPp1/BCi0hpSay6uVluC2pRjzpQA==",
    title: "Cheese",
  },
  {
    id: 3,
    grid: "Aw3CMlWZX4wpEDqmvZ7WYS5ueShWxJ25FusZc2VRK6iMqLip7QA=",
    title: "Chicken Leg",
  },
  {
    id: 4,
    grid: "Aw4Rgy1HPcIxHacnXhjtGse3BbULeMnVIpKvY5KKau5J68kt559kh4oA",
    title: "Chocolate Bar",
  },
  {
    id: 5,
    grid: "AwkRgjW5Lrr1nU80Ms9XPjDlRNZGdXVMhEzSwlG82/I7GPckIA==",
    title: "Donut",
  },
  {
    id: 6,
    grid: "Aw18Z4Iy1qzvRSxxe40sZV/u2hiOeRphBFF2Mt18IJjLr4QA",
    title: "Fishbone",
  },
  {
    id: 7,
    grid: "Aw4Rgy1Et3L3E6y2oyr7x3VAlA4k0s8uCiBCm8ush04IA===",
    title: "French Fries",
  },
  {
    id: 8,
    grid: "Aw19gjNORxwo0i5pM58Eey3eOCsJMxpFlF5VqhRW8mt9EQA=",
    title: "Hamburger",
  },
  {
    id: 9,
    grid: "Aw0Rg0vDbaTzk69iUuqbmO4pHfdOPcA2MsjI8kyrOmqx3R83NVZLhehIA===",
    title: "Hot Dog",
  },
  {
    id: 10,
    grid: "AwkRgjW9kqZ3vRYnNelNnZ7xWaNQk0MzIwuc6qi0mu2B614IA===",
    title: "Ice Cream",
  },
  {
    id: 11,
    grid: "AwkRgjW4uvRnJJtGxStbNaf3PAwqU3ZDDVcyRYsq8GWmK07S16uVdV5FkA==",
    title: "Meat",
  },
  {
    id: 12,
    grid: "AwkRgjW5LUrTvcjbIZVyfsTgwoovYmWBcpSq8G2lC2plhtUIA===",
    title: "Mushroom",
  },
  {
    id: 13,
    grid: "Aw18QjNHpr1sRDYrO5SuqSzUIi0JMW+8lFqV1RpOy1VNpbJ2sQA=",
    title: "Onigiri",
  },
  {
    id: 14,
    grid: "Aw4Rgy1GPe6ys6oXNjLqTqkvHcQouPA8taS3a9JYlC+5/EIA",
    title: "Pepper",
  },
  {
    id: 15,
    grid: "Aw0Rg0qje7aRoljhnp12M9ejTcAvOUtcswo9E8u0h8oA",
    title: "Piece of Cake",
  },
  {
    id: 16,
    grid: "AwRj49WHb2zyTRkLVW9IM9NlfQqPXSaOHc0hI1ZK+5DC5q1tj5rmIA==",
    title: "Pizza Slice",
  },
  {
    id: 17,
    grid: "AwkRgjW9MnZ3jK8orMNmNdT6fTdQ4/BIvCss6pE0pBQrZlVtlhIA",
    title: "Popsicle",
  },
  {
    id: 18,
    grid: "AzCM48WlLPaVPBTlsXD0u8xiGI9QomJM3KYrMnCu+6xlF+mIA===",
    title: "Shrimp",
  },
  {
    id: 19,
    grid: "Aw14IxeNXNjtB0kvs2b2Xl1E+2sueJpCohklIhZ5tdTYQA==",
    title: "Skewer",
  },
  {
    id: 20,
    grid: "Aw4Rgy1UJlK3jR1kse2mvjm9HAjY47UwuJZHcSimqhekqKEIA===",
    title: "Bread Slice",
  },
  {
    id: 21,
    grid: "AwRj/Yqlrm63tJMLoqDm2zFg3A/fIkvVScwrC4y66su02+287V3DeIA=",
    title: "Beer",
  },
  {
    id: 22,
    grid: "Aw4Rgy1Hyjangx0bTU2mfOSffOKYyA+UlQiyjG6k2ppovfIA",
    title: "Milk",
  },
  {
    id: 23,
    grid: "Aw0RlSuDq2F0TOJm1ZmYe7x/Q3bI4k0nNCs6/K06BpOqIA==",
    title: "Coffee Cup",
  },
  {
    id: 24,
    grid: "Aw1iMauOScSvJdZocV1kXZmS+BshaRpJJKlB1xtUZVj6DurhRzQA",
    title: "Lemonade",
  },
];

export const categories: IDataCategory[] = [
  {
    countdownMinutes: 5,
    levels: levels5x5,
    size: 5,
    title: "5x5"
  },
  {
    countdownMinutes: 10,
    levels: levels10x10,
    size: 10,
    title: "10x10"
  },
  {
    countdownMinutes: 15,
    levels: level15x15,
    size: 15,
    title: "15x15"
  }
];
