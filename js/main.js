import { 
  FAMILY_CONFIG, 
  familyDatabase, 
  figuresData, 
  mottoLibrary, 
  wishesData, 
  eventsData, 
  albumData, 
  forumData 
} from './config.js';

// 全局变量
let worshipCount = 128;
let currentUser = null;

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  applyConfig();
  renderZiBeiList();
  renderFamilyTree();
  renderFigures();
  renderWishes();
  renderEvents();
  renderAlbum();
  renderForum();
  populateSearchSelect();
  createPetals();
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  initAuth();
});

// 应用配置
function applyConfig() {
  document.getElementById('navSurname').textContent = FAMILY_CONFIG.surname;
  document.getElementById('navTitle').textContent = FAMILY_CONFIG.title;
  document.getElementById('heroSurname').textContent = FAMILY_CONFIG.surname;
  document.getElementById('heroTitle').textContent = FAMILY_CONFIG.title + '谱';
  document.getElementById('heroSubtitle').textContent = FAMILY_CONFIG.subtitle;
  document.getElementById('heroLocation').textContent = FAMILY_CONFIG.location;
  document.getElementById('statGenerations').textContent = FAMILY_CONFIG.generations + '代';
  document.getElementById('statPopulation').textContent = FAMILY_CONFIG.population;
  document.getElementById('statYears').textContent = FAMILY_CONFIG.history;
  document.getElementById('statScholars').textContent = '书香';
  document.getElementById('originStory').innerHTML = FAMILY_CONFIG.originStory;
  document.getElementById('familyMotto').innerHTML = `
    <p class="text-lg md:text-xl text-gold-200 font-semibold">"${FAMILY_CONFIG.motto}"</p>
    <p class="text-amber-100/80 text-sm md:text-base">${FAMILY_CONFIG.mottoDesc}</p>
  `;
  document.getElementById('footerSurname').textContent = FAMILY_CONFIG.surname;
  document.getElementById('footerTitle').textContent = FAMILY_CONFIG.title;
}

// 渲染字辈列表
function renderZiBeiList() {
  const container = document.getElementById('ziBeiList');
  container.innerHTML = FAMILY_CONFIG.ziBei.map((z, i) => `
    <div class="flex flex-col items-center">
      <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-ink-900 font-bold text-sm md:text-base">${i + 1}</div>
      <span class="text-gold-300 font-semibold mt-1 text-sm md:text-base">${z}</span>
      <span class="text-xs text-amber-100/50">第${i + 1}世</span>
    </div>
  `).join('');
}

// 渲染族谱树
function renderFamilyTree() {
  const container = document.getElementById('familyTree');
  // 简单展示前三代作为示例
  const displayData = familyDatabase.slice(0, 6);
  let html = '<div class="flex flex-col items-center space-y-4">';
  displayData.forEach((member, index) => {
    html += `
      <div class="flex flex-col items-center">
        ${index > 0 ? '<div class="w-0.5 h-8 bg-gold-500/50"></div>' : ''}
        <div class="glass-card rounded-2xl p-3 md:p-4 cursor-pointer hover:bg-gold-500/10 transition-all" onclick="showMemberDetail(${member.id})">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
              <span class="text-ink-900 font-bold text-lg md:text-xl">${member.ziBei}</span>
            </div>
            <div>
              <p class="text-gold-300 font-semibold text-sm md:text-base">${member.name}</p>
              <p class="text-xs text-amber-100/50">${member.title}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  html += '<p class="text-amber-100/50 text-sm mt-4">点击成员查看详情 · 完整族谱请在"谱系查询"中查看</p></div>';
  container.innerHTML = html;
}

// 显示成员详情
function showMemberDetail(id) {
  const member = familyDatabase.find(m => m.id === id);
  if (member) {
    alert(`${member.name}\n${member.title}\n生卒：${member.birth} - ${member.death || '健在'}\n\n${member.description}`);
  }
}

// 渲染人物卡片
function renderFigures() {
  const container = document.getElementById('figuresGrid');
  container.innerHTML = figuresData.map(figure => `
    <div class="glass-card rounded-3xl p-5 md:p-6 hover:bg-ink-700/30 transition-all">
      <div class="flex items-center gap-3 md:gap-4 mb-4">
        <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center flex-shrink-0">
          <span class="text-ink-900 font-bold text-xl md:text-2xl">${figure.ziBei}</span>
        </div>
        <div>
          <h3 class="text-lg md:text-xl text-gold-300 font-semibold">${figure.name}</h3>
          <p class="text-xs md:text-sm text-amber-100/60">${figure.title}</p>
        </div>
      </div>
      <div class="flex items-center gap-3 text-xs md:text-sm text-amber-100/70 mb-3">
        <span><i class="fas fa-birthday-cake text-gold-500 mr-1"></i>${figure.birth}</span>
        ${figure.death ? `<span><i class="fas fa-cross text-cinnabar-500 mr-1"></i>${figure.death}</span>` : '<span><i class="fas fa-heart text-jade-500 mr-1"></i>健在</span>'}
      </div>
      <p class="text-amber-100/80 text-xs md:text-sm leading-relaxed mb-4">${figure.description}</p>
      <div class="flex flex-wrap gap-1 md:gap-2">
        ${figure.achievements.map(a => `<span class="px-2 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs">${a}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// 填充搜索下拉框
function populateSearchSelect() {
  const select = document.getElementById('searchGeneration');
  FAMILY_CONFIG.ziBei.forEach((z, i) => {
    const option = document.createElement('option');
    option.value = z;
    option.textContent = `第${i + 1}世 · ${z}字辈`;
    select.appendChild(option);
  });
}

// 搜索家族成员
function searchFamily() {
  const nameInput = document.getElementById('searchName').value.trim();
  const generationSelect = document.getElementById('searchGeneration').value;
  const resultsContainer = document.getElementById('searchResults');
  const resultsList = document.getElementById('resultsList');

  let results = familyDatabase;

  if (nameInput) {
    results = results.filter(m => m.name.includes(nameInput));
  }
  if (generationSelect) {
    results = results.filter(m => m.ziBei === generationSelect);
  }

  resultsContainer.classList.remove('hidden');

  if (results.length === 0) {
    resultsList.innerHTML = `
      <div class="text-center py-8">
        <i class="fas fa-search text-4xl text-gold-500/30 mb-4"></i>
        <p class="text-amber-100/60">未找到匹配的家族成员</p>
      </div>
    `;
  } else {
    resultsList.innerHTML = results.map(member => `
      <div class="p-4 rounded-2xl bg-ink-800/50 hover:bg-ink-700/50 transition-colors">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
              <span class="text-gold-400 font-semibold text-base md:text-lg">${member.ziBei}</span>
            </div>
            <div>
              <h4 class="text-gold-300 font-semibold text-sm md:text-base">${member.name}</h4>
              <p class="text-xs text-amber-100/50">${member.title} · ${member.ziBei}字辈</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-xs md:text-sm text-gold-400">第${member.generation}世</p>
            <p class="text-xs text-amber-100/50">${member.birth}${member.death ? ' - ' + member.death : ' - 今'}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// 渲染家族事件
function renderEvents() {
  const container = document.getElementById('eventsTimeline');
  if (container) {
    container.innerHTML = eventsData.map((event, index) => `
      <div class="timeline-item">
        <div class="timeline-content">
          <h3 class="text-gold-300 font-semibold mb-2">${event.title}</h3>
          <p class="text-xs text-cinnabar-400 mb-2">${event.year}</p>
          <p class="text-amber-100/80 text-sm">${event.description}</p>
        </div>
      </div>
    `).join('');
  }
}

// 渲染家族相册
function renderAlbum() {
  const container = document.getElementById('albumGrid');
  if (container) {
    container.innerHTML = albumData.map(album => `
      <div class="album-item">
        <img src="${album.image}" alt="${album.title}">
        <div class="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent flex flex-col justify-end p-3">
          <h3 class="text-gold-300 font-semibold text-sm">${album.title}</h3>
          <p class="text-xs text-amber-100/60">${album.year}</p>
        </div>
      </div>
    `).join('');
  }
}

// 渲染家族论坛
function renderForum() {
  const container = document.getElementById('forumThreads');
  if (container) {
    container.innerHTML = forumData.map(thread => `
      <div class="forum-thread">
        <h3 class="thread-title">${thread.title}</h3>
        <div class="thread-meta">
          <span>${thread.author}</span> · <span>${thread.time}</span>
        </div>
        <p class="text-amber-100/80 text-sm">${thread.content}</p>
        <div class="mt-3 flex justify-end">
          <button class="text-xs text-gold-400 hover:text-gold-300 transition-colors">查看回复</button>
        </div>
      </div>
    `).join('');
  }
}

// 在线祭祖 - 上香
function lightIncense() {
  worshipCount++;
  document.getElementById('worshipCount').textContent = worshipCount;

  // 创建烟雾效果
  const container = document.getElementById('smokeContainer');
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const smoke = document.createElement('div');
      smoke.className = 'smoke-particle';
      smoke.style.left = (45 + Math.random() * 10) + '%';
      smoke.style.bottom = '50%';
      smoke.style.animationDuration = (2 + Math.random() * 2) + 's';
      container.appendChild(smoke);
      setTimeout(() => smoke.remove(), 4000);
    }, i * 200);
  }

  // 显示祝福语
  showToast('虔诚一拜，祖先庇佑，福泽绵长！');
}

// 家训摇签
function shakeForMotto() {
  const btn = document.getElementById('mottoBtn');
  const mottoEl = document.getElementById('dailyMotto');

  btn.classList.add('shaking');
  setTimeout(() => {
    btn.classList.remove('shaking');
    const randomMotto = mottoLibrary[Math.floor(Math.random() * mottoLibrary.length)];
    mottoEl.textContent = randomMotto;
    mottoEl.classList.add('text-gold-400');
    setTimeout(() => mottoEl.classList.remove('text-gold-400'), 500);
  }, 1000);
}

// 许愿模板
function setWishTemplate(template) {
  document.getElementById('wishText').value = `愿${template}，祖先庇佑，心想事成。`;
}

// 放飞许愿灯
function releaseLantern() {
  const text = document.getElementById('wishText').value.trim();
  if (!text) {
    showToast('请先写下您的心愿');
    return;
  }

  // 添加到许愿墙
  wishesData.unshift({
    id: wishesData.length + 1,
    name: currentUser ? currentUser.name : FAMILY_CONFIG.surname + '氏族人',
    wish: text,
    time: '刚刚'
  });
  renderWishes();

  // 创建孔明灯动画
  const lantern = document.createElement('div');
  lantern.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none';
  lantern.innerHTML = `
    <div class="w-16 h-24 bg-gradient-to-t from-gold-500 to-gold-300 rounded-t-full relative opacity-80" style="animation: lantern-float 4s ease-out forwards;">
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-cinnabar-500 rounded-b"></div>
    </div>
  `;
  document.body.appendChild(lantern);
  setTimeout(() => lantern.remove(), 4000);

  document.getElementById('wishText').value = '';
  showToast('心愿已放飞，祖先必将庇佑！');
}

// 渲染许愿墙
function renderWishes() {
  const container = document.getElementById('wishesWall');
  container.innerHTML = wishesData.slice(0, 10).map(w => `
    <div class="p-3 rounded-xl bg-ink-800/50 text-sm">
      <div class="flex justify-between items-start mb-1">
        <span class="text-gold-400 text-xs">${w.name}</span>
        <span class="text-xs text-amber-100/40">${w.time}</span>
      </div>
      <p class="text-amber-100/80 text-xs md:text-sm">${w.wish}</p>
    </div>
  `).join('');
}

// 创建花瓣飘落效果
function createPetals() {
  const container = document.getElementById('petalsContainer');
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 10 + 's';
    petal.style.animationDuration = (8 + Math.random() * 7) + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.4;
    container.appendChild(petal);
  }
}

// 显示Toast提示
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

// 移动端菜单切换
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('mobileMenu').classList.add('hidden');
    }
  });
});

// 用户认证系统
function initAuth() {
  // 模拟用户认证
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const userMenu = document.getElementById('userMenu');
  const userInfo = document.getElementById('userInfo');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      // 模拟登录
      currentUser = { id: 1, name: '赵氏族孙', role: 'member' };
      updateUserUI();
      showToast('登录成功！');
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      showToast('注册功能开发中...');
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      currentUser = null;
      updateUserUI();
      showToast('已退出登录');
    });
  }

  function updateUserUI() {
    if (currentUser) {
      if (userMenu) userMenu.classList.remove('hidden');
      if (userInfo) userInfo.textContent = currentUser.name;
      if (loginBtn) loginBtn.classList.add('hidden');
      if (registerBtn) registerBtn.classList.add('hidden');
    } else {
      if (userMenu) userMenu.classList.add('hidden');
      if (loginBtn) loginBtn.classList.remove('hidden');
      if (registerBtn) registerBtn.classList.remove('hidden');
    }
  }
}

// 语言切换功能
function changeLanguage(lang) {
  showToast(`语言切换至${lang}开发中...`);
}

// 深色模式切换
function toggleDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  toggle.classList.toggle('active');
  showToast('深色模式切换功能开发中...');
}

// 成员管理功能
function openAddMemberModal() {
  showToast('添加成员功能开发中...');
}

function openEditMemberModal(id) {
  showToast('编辑成员功能开发中...');
}

function deleteMember(id) {
  if (confirm('确定要删除该成员吗？')) {
    showToast('删除成员功能开发中...');
  }
}

// 事件管理功能
function openAddEventModal() {
  showToast('添加事件功能开发中...');
}

// 相册管理功能
function openAddAlbumModal() {
  showToast('添加相册功能开发中...');
}

// 论坛管理功能
function openNewThreadModal() {
  showToast('发布新帖子功能开发中...');
}

// 导出族谱
function exportGenealogy() {
  showToast('导出族谱功能开发中...');
}

// 打印族谱
function printGenealogy() {
  window.print();
}

// 分享功能
function shareGenealogy() {
  if (navigator.share) {
    navigator.share({
      title: FAMILY_CONFIG.title + '族谱',
      text: '查看我们家族的数字族谱',
      url: window.location.href
    });
  } else {
    // 复制链接到剪贴板
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('链接已复制到剪贴板');
    });
  }
}

// 响应式调整
function handleResize() {
  // 响应式调整逻辑
  const width = window.innerWidth;
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    if (width < 768) {
      heroTitle.classList.remove('text-7xl');
      heroTitle.classList.add('text-4xl');
    } else {
      heroTitle.classList.remove('text-4xl');
      heroTitle.classList.add('text-7xl');
    }
  }
}

// 资历文件上传功能
let uploadedFiles = [];
let fileIdCounter = 1;

// 初始化资历文件上传功能
function initFileUpload() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const filesGrid = document.getElementById('filesGrid');

  if (dropZone && fileInput) {
    // 点击上传
    dropZone.addEventListener('click', () => fileInput.click());
    
    // 拖放上传
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });
    
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      handleFiles(e.dataTransfer.files);
    });
    
    // 文件选择
    fileInput.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });
  }

  // 渲染示例文件
  renderSampleFiles();
}

// 处理文件上传
function handleFiles(files) {
  Array.from(files).forEach(file => {
    uploadFile(file);
  });
}

// 上传文件
function uploadFile(file) {
  const uploadProgress = document.getElementById('uploadProgress');
  const progressFileName = document.getElementById('progressFileName');
  const progressPercent = document.getElementById('progressPercent');
  const progressBar = document.getElementById('progressBar');

  if (uploadProgress) {
    uploadProgress.classList.remove('hidden');
    progressFileName.textContent = file.name;
    progressPercent.textContent = '0%';
    progressBar.style.width = '0%';
  }

  // 模拟上传进度
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    if (progress <= 100) {
      if (progressPercent) progressPercent.textContent = progress + '%';
      if (progressBar) progressBar.style.width = progress + '%';
    } else {
      clearInterval(interval);
      if (uploadProgress) uploadProgress.classList.add('hidden');
      
      // 添加到上传文件列表
      const fileItem = {
        id: fileIdCounter++,
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type,
        uploadedAt: new Date().toLocaleString(),
        url: URL.createObjectURL(file)
      };
      
      uploadedFiles.unshift(fileItem);
      renderFiles();
      showToast('文件上传成功！');
    }
  }, 100);
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 获取文件图标
function getFileIcon(type) {
  if (type.includes('pdf')) {
    return { class: 'pdf', icon: 'fas fa-file-pdf' };
  } else if (type.includes('image')) {
    return { class: 'image', icon: 'fas fa-file-image' };
  } else if (type.includes('word') || type.includes('doc')) {
    return { class: 'doc', icon: 'fas fa-file-word' };
  } else {
    return { class: 'other', icon: 'fas fa-file' };
  }
}

// 渲染文件列表
function renderFiles() {
  const filesGrid = document.getElementById('filesGrid');
  if (filesGrid) {
    filesGrid.innerHTML = uploadedFiles.map(file => {
      const fileIcon = getFileIcon(file.type);
      return `
        <div class="file-card">
          <div class="file-icon ${fileIcon.class}">
            <i class="${fileIcon.icon}"></i>
          </div>
          <div class="file-info">
            <h4 class="file-name">${file.name}</h4>
            <p class="file-meta">大小: ${file.size}</p>
            <p class="file-meta">上传时间: ${file.uploadedAt}</p>
          </div>
          <div class="file-actions">
            <button class="file-action-btn view" onclick="previewFile(${file.id})">
              <i class="fas fa-eye"></i>
              <span>预览</span>
            </button>
            <button class="file-action-btn delete" onclick="deleteFile(${file.id})">
              <i class="fas fa-trash"></i>
              <span>删除</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// 预览文件
function previewFile(id) {
  const file = uploadedFiles.find(f => f.id === id);
  if (file) {
    window.open(file.url, '_blank');
  }
}

// 删除文件
function deleteFile(id) {
  if (confirm('确定要删除此文件吗？')) {
    uploadedFiles = uploadedFiles.filter(f => f.id !== id);
    renderFiles();
    showToast('文件已删除');
  }
}

// 渲染示例文件
function renderSampleFiles() {
  const sampleFiles = [
    {
      id: fileIdCounter++,
      name: '熊氏宗族谱全本.pdf',
      size: '2.5 MB',
      type: 'application/pdf',
      uploadedAt: '2024-03-01 10:30',
      url: '#'
    },
    {
      id: fileIdCounter++,
      name: '熊斯创家族照片.jpg',
      size: '1.2 MB',
      type: 'image/jpeg',
      uploadedAt: '2024-02-28 14:15',
      url: '#'
    },
    {
      id: fileIdCounter++,
      name: '熊氏家训整理.docx',
      size: '850 KB',
      type: 'application/msword',
      uploadedAt: '2024-02-25 09:45',
      url: '#'
    }
  ];
  
  uploadedFiles = sampleFiles;
  renderFiles();
}

// GitHub版本控制功能
let githubCommits = [];
let commitIdCounter = 1;

// 初始化GitHub功能
function initGitHub() {
  // 渲染示例提交历史
  renderGitHubHistory();
}

// 上传代码到GitHub
function uploadToGitHub() {
  const repoUrl = document.getElementById('githubRepoUrl').value.trim();
  const branch = document.getElementById('githubBranch').value.trim() || 'main';
  const commitMessage = document.getElementById('githubCommitMessage').value.trim();

  if (!repoUrl) {
    showToast('请输入GitHub仓库URL');
    return;
  }

  if (!commitMessage) {
    showToast('请输入提交信息');
    return;
  }

  // 模拟上传过程
  showToast('正在上传代码...');
  
  setTimeout(() => {
    // 添加新的提交记录
    const newCommit = {
      id: commitIdCounter++,
      message: commitMessage,
      author: currentUser ? currentUser.name : '熊氏族人',
      date: new Date().toLocaleString(),
      repo: repoUrl,
      branch: branch
    };
    
    githubCommits.unshift(newCommit);
    renderGitHubHistory();
    
    // 清空表单
    document.getElementById('githubCommitMessage').value = '';
    
    showToast('代码上传成功！');
  }, 1500);
}

// 检查GitHub状态
function checkGitHubStatus() {
  showToast('正在检查GitHub状态...');
  
  setTimeout(() => {
    showToast('GitHub连接正常！');
  }, 1000);
}

// 渲染GitHub提交历史
function renderGitHubHistory() {
  const container = document.getElementById('githubHistory');
  if (container) {
    if (githubCommits.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8">
          <i class="fab fa-github text-4xl text-gold-500/30 mb-4"></i>
          <p class="text-amber-100/60">暂无提交历史</p>
        </div>
      `;
    } else {
      container.innerHTML = githubCommits.map(commit => `
        <div class="github-history-item">
          <h4 class="commit-message">${commit.message}</h4>
          <div class="commit-meta">
            <span>${commit.author}</span> · <span>${commit.date}</span>
          </div>
          <div class="commit-details">
            <span>仓库: ${commit.repo}</span> · <span>分支: ${commit.branch}</span>
          </div>
        </div>
      `).join('');
    }
  }
}

// 亲家联系功能
let relativesData = [];
let relativeIdCounter = 1;

// 初始化亲家联系功能
function initRelatives() {
  // 渲染示例亲家数据
  renderSampleRelatives();
}

// 打开添加亲家模态框
function openAddRelativeModal() {
  showToast('添加亲家功能开发中...');
}

// 渲染示例亲家数据
function renderSampleRelatives() {
  const sampleRelatives = [
    {
      id: relativeIdCounter++,
      name: '李明',
      relationship: '长女熊传英之夫',
      phone: '13800138000',
      email: 'liming@example.com',
      address: '江西省南昌市溪霞镇',
      birthday: '1956-08-15',
      familyMembers: ['李明', '熊传英', '李明辉', '李明霞']
    },
    {
      id: relativeIdCounter++,
      name: '王强',
      relationship: '二女熊传秀之夫',
      phone: '13900139000',
      email: 'wangqiang@example.com',
      address: '江西省南昌市溪霞镇',
      birthday: '1960-05-20',
      familyMembers: ['王强', '熊传秀', '王小明']
    }
  ];
  
  relativesData = sampleRelatives;
  renderRelatives();
}

// 渲染亲家列表
function renderRelatives() {
  const container = document.getElementById('relativesGrid');
  if (container) {
    container.innerHTML = relativesData.map(relative => `
      <div class="relative-card">
        <div class="relative-header">
          <div class="relative-avatar">
            ${relative.name.charAt(0)}
          </div>
          <div class="relative-info">
            <h3>${relative.name}</h3>
            <p>${relative.relationship}</p>
          </div>
        </div>
        <div class="relative-contact">
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>${relative.phone}</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>${relative.email}</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${relative.address}</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-birthday-cake"></i>
            <span>${relative.birthday}</span>
          </div>
        </div>
        <div class="relative-actions">
          <button class="relative-action-btn edit" onclick="editRelative(${relative.id})">
            <i class="fas fa-edit"></i>
            <span>编辑</span>
          </button>
          <button class="relative-action-btn delete" onclick="deleteRelative(${relative.id})">
            <i class="fas fa-trash"></i>
            <span>删除</span>
          </button>
        </div>
      </div>
    `).join('');
  }
}

// 编辑亲家信息
function editRelative(id) {
  showToast('编辑亲家功能开发中...');
}

// 删除亲家信息
function deleteRelative(id) {
  if (confirm('确定要删除此亲家信息吗？')) {
    relativesData = relativesData.filter(r => r.id !== id);
    renderRelatives();
    showToast('亲家信息已删除');
  }
}

// 监听窗口大小变化
window.addEventListener('resize', handleResize);

// 初始化响应式
handleResize();

// 初始化资历文件上传功能
document.addEventListener('DOMContentLoaded', initFileUpload);

// 初始化GitHub功能
document.addEventListener('DOMContentLoaded', initGitHub);

// 初始化亲家联系功能
document.addEventListener('DOMContentLoaded', initRelatives);