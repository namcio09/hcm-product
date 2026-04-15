import {
  FaBookOpen,
  FaBalanceScale,
  FaFlag,
  FaGlobeAsia,
  FaPeopleCarry,
  FaShieldAlt,
  FaUsers,
  FaUniversity
} from "react-icons/fa";

export const navItems = [
  { id: "trang-chu", label: "Trang chủ" },
  { id: "noi-dung-chinh", label: "Nội dung chính" },
  { id: "van-dung", label: "Vận dụng hiện nay" },
  { id: "so-do", label: "Sơ đồ tư duy" },
  { id: "game", label: "Game" }
];

export const heroData = {
  title:
    "Tư tưởng Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội",
  subtitle:
    "Một landing page học tập giúp hệ thống hóa tri thức chính trị - triết học theo cách trực quan, có chiều sâu và dễ ghi nhớ."
};

export const imagePlaceholders = {
  hero: {
    src: "/images/hero-placeholder.jpg",
    alt: "Hinh anh minh hoa cho phan hero"
  },
  intro: {
    src: "/images/intro-placeholder.jpg",
    alt: "Hinh anh minh hoa cho phan gioi thieu chu de"
  },
  game: {
    src: "/images/game-placeholder.jpg",
    alt: "Hinh anh minh hoa cho game me cung tri thuc"
  }
};

export const introHighlights = [
  {
    title: "Tính nền tảng",
    text: "Làm rõ luận điểm cốt lõi: độc lập dân tộc và chủ nghĩa xã hội là hai mục tiêu thống nhất trong tư tưởng Hồ Chí Minh."
  },
  {
    title: "Tính lịch sử - hiện thực",
    text: "Nội dung gắn giữa chiều dài cách mạng dân tộc dân chủ nhân dân và yêu cầu xây dựng đất nước hiện nay."
  },
  {
    title: "Tính hành động",
    text: "Chuyển hóa tri thức thành năng lực phân tích và vận dụng trong học tập, nghiên cứu, đời sống công dân."
  }
];

export const mainContentTabs = [
  {
    id: "co-so",
    label: "Độc lập dân tộc là tiền đề",
    badge: "Cơ sở",
    coreMeaning:
      "Độc lập dân tộc là điều kiện mở đường, tạo nền tảng chính trị - xã hội để tiến lên chủ nghĩa xã hội.",
    points: [
      "Độc lập dân tộc là mục tiêu đầu tiên của cách mạng và là cơ sở để thực hiện các mục tiêu phát triển tiếp theo.",
      "Trong tư tưởng Hồ Chí Minh, độc lập không chỉ là chủ quyền quốc gia mà còn gắn với tự do, cơm no, áo ấm, hạnh phúc của nhân dân.",
      "Giải phóng dân tộc là bước mở đường lịch sử để tiến tới chủ nghĩa xã hội.",
      "Cách mạng dân tộc dân chủ nhân dân càng triệt để thì tiền đề đi lên chủ nghĩa xã hội càng thuận lợi."
    ]
  },
  {
    id: "bao-dam",
    label: "Chủ nghĩa xã hội bảo đảm độc lập",
    badge: "Trọng tâm",
    coreMeaning:
      "Chủ nghĩa xã hội tạo cơ sở vật chất, thể chế dân chủ và sức mạnh bảo vệ nền độc lập dân tộc bền vững.",
    points: [
      "Theo Hồ Chí Minh, chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng triệt để các dân tộc bị áp bức và người lao động.",
      "Chủ nghĩa xã hội giúp xây dựng chế độ dân chủ, bảo đảm quyền làm chủ thực chất của nhân dân.",
      "Đây là điều kiện phát triển kinh tế, khoa học kỹ thuật, nâng cao đời sống vật chất và tinh thần.",
      "Chủ nghĩa xã hội góp phần củng cố hòa bình, hữu nghị và bảo vệ nền độc lập lâu dài."
    ]
  },
  {
    id: "dieu-kien",
    label: "Điều kiện thực hiện",
    badge: "Điều kiện",
    coreMeaning:
      "Muốn gắn bền độc lập dân tộc với chủ nghĩa xã hội cần hội đủ các điều kiện chính trị, xã hội và quốc tế.",
    points: [
      "Bảo đảm vai trò lãnh đạo của Đảng Cộng sản là nhân tố quyết định định hướng cách mạng.",
      "Củng cố khối đại đoàn kết toàn dân tộc, lấy liên minh công - nông - trí thức làm nền tảng.",
      "Tăng cường đoàn kết quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    ]
  }
];

export const summaryNodes = [
  {
    id: "doc-lap",
    title: "Độc lập dân tộc",
    note: "Tiền đề mở đường"
  },
  {
    id: "cnxh",
    title: "Chủ nghĩa xã hội",
    note: "Bảo đảm vững chắc độc lập"
  },
  {
    id: "dieu-kien-thuc-thi",
    title: "Điều kiện thực hiện",
    note: "Đảng + đại đoàn kết + đoàn kết quốc tế"
  }
];

export const applicationItems = [
  {
    id: "kien-dinh",
    title: "Kiên định mục tiêu và con đường",
    icon: FaFlag,
    badge: "Vận dụng",
    points: [
      "Kiên định con đường đi lên chủ nghĩa xã hội trong điều kiện hội nhập sâu rộng.",
      "Giữ vững mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội như định hướng xuyên suốt."
    ]
  },
  {
    id: "dan-chu",
    title: "Phát huy sức mạnh dân chủ xã hội chủ nghĩa",
    icon: FaUsers,
    badge: "Vận dụng",
    points: [
      "Bảo đảm quyền lực nhà nước thuộc về nhân dân, tăng cường trách nhiệm giải trình.",
      "Thực hiện phương châm: dân biết, dân bàn, dân làm, dân kiểm tra.",
      "Hoàn thiện pháp luật, tôn trọng và bảo vệ quyền công dân."
    ]
  },
  {
    id: "he-thong-chinh-tri",
    title: "Củng cố hệ thống chính trị",
    icon: FaUniversity,
    badge: "Trọng tâm",
    points: [
      "Hệ thống chính trị thống nhất dưới sự lãnh đạo của Đảng.",
      "Phát huy quyền làm chủ của nhân dân qua Nhà nước, dân chủ trực tiếp và dân chủ đại diện."
    ]
  },
  {
    id: "chong-suy-thoai",
    title: "Đấu tranh chống suy thoái, tự diễn biến",
    icon: FaShieldAlt,
    badge: "Cảnh báo",
    points: [
      "Xây dựng, chỉnh đốn Đảng là nhiệm vụ then chốt, thường xuyên.",
      "Giữ vững định hướng xã hội chủ nghĩa, bảo vệ nền tảng tư tưởng của Đảng."
    ]
  }
];

export const gameConfig = {
  rows: 7,
  cols: 7,
  start: { row: 0, col: 0 },
  finish: { row: 6, col: 6 },
  walls: [
    "0-2",
    "0-4",
    "0-5",
    "1-2",
    "1-4",
    "2-2",
    "2-4",
    "2-5",
    "3-0",
    "3-3",
    "4-1",
    "4-3",
    "4-5",
    "5-1",
    "5-5",
    "6-3"
  ],
  checkpoints: [
    {
      key: "1-0",
      questionId: "q1"
    },
    {
      key: "3-1",
      questionId: "q2"
    },
    {
      key: "3-5",
      questionId: "q3"
    },
    {
      key: "5-3",
      questionId: "q4"
    }
  ]
};

export const gameQuestions = {
  q1: {
    id: "q1",
    prompt: "Trong tư tưởng Hồ Chí Minh, độc lập dân tộc được hiểu đầy đủ nhất là gì?",
    options: [
      "Chỉ là độc lập về lãnh thổ và chủ quyền.",
      "Độc lập dân tộc gắn với tự do, cơm no, áo ấm, hạnh phúc của nhân dân.",
      "Là mục tiêu tạm thời, sau đó thay đổi theo hoàn cảnh.",
      "Chủ yếu là độc lập trong quan hệ đối ngoại."
    ],
    correctIndex: 1,
    explanation:
      "Hồ Chí Minh luôn nhấn mạnh độc lập phải đi liền tự do và hạnh phúc của nhân dân, không chỉ dừng ở chủ quyền hình thức."
  },
  q2: {
    id: "q2",
    prompt: "Vì sao chủ nghĩa xã hội là điều kiện bảo đảm nền độc lập dân tộc vững chắc?",
    options: [
      "Vì chủ nghĩa xã hội chỉ tập trung vào quân sự.",
      "Vì chủ nghĩa xã hội xóa bỏ mọi quan hệ quốc tế.",
      "Vì chủ nghĩa xã hội xây dựng dân chủ, phát triển kinh tế - khoa học, nâng cao đời sống nhân dân.",
      "Vì chủ nghĩa xã hội không cần vai trò của nhân dân."
    ],
    correctIndex: 2,
    explanation:
      "Nền độc lập bền vững phải dựa trên nội lực tổng hợp: thể chế dân chủ, kinh tế phát triển, đời sống nhân dân được cải thiện."
  },
  q3: {
    id: "q3",
    prompt:
      "Đâu là nhóm điều kiện quan trọng để gắn độc lập dân tộc với chủ nghĩa xã hội?",
    options: [
      "Đảng lãnh đạo, đại đoàn kết toàn dân tộc, tăng cường đoàn kết quốc tế.",
      "Chỉ cần tăng trưởng kinh tế ngắn hạn.",
      "Chỉ cần một lực lượng xã hội duy nhất.",
      "Giảm vai trò phối hợp quốc tế."
    ],
    correctIndex: 0,
    explanation:
      "Ba trụ cột điều kiện được nhấn mạnh gồm vai trò lãnh đạo của Đảng, khối đại đoàn kết toàn dân và đoàn kết quốc tế."
  },
  q4: {
    id: "q4",
    prompt: "Phương châm dân chủ nào được nhấn mạnh trong vận dụng hiện nay?",
    options: [
      "Dân biết, dân bàn, dân làm, dân kiểm tra.",
      "Dân biết là đủ.",
      "Nhà nước quyết định hoàn toàn, dân không tham gia.",
      "Dân làm, không cần dân kiểm tra."
    ],
    correctIndex: 0,
    explanation:
      "Phương châm này thể hiện bản chất dân chủ xã hội chủ nghĩa và yêu cầu phát huy quyền làm chủ của nhân dân."
  }
};

export const gameLessonSummary = [
  {
    icon: FaBookOpen,
    text: "Độc lập dân tộc là mục tiêu trước hết và là tiền đề để phát triển đất nước theo định hướng xã hội chủ nghĩa."
  },
  {
    icon: FaBalanceScale,
    text: "Chủ nghĩa xã hội tạo nền tảng dân chủ, công bằng và phát triển bền vững để bảo đảm độc lập lâu dài."
  },
  {
    icon: FaPeopleCarry,
    text: "Sức mạnh thực hiện đến từ vai trò lãnh đạo của Đảng, đại đoàn kết toàn dân tộc và đoàn kết quốc tế."
  },
  {
    icon: FaGlobeAsia,
    text: "Vận dụng hiện nay đòi hỏi kiên định mục tiêu, phát huy dân chủ, xây dựng hệ thống chính trị vững mạnh."
  }
];
