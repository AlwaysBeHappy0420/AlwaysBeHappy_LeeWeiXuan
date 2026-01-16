const projectLanguage = {
  en: {
    AXERAS: {
      title: '<strong id="top">AXERAS</strong>',
      projectDesc: ' <a href="https://store.steampowered.com/app/3873770/AXERAS/" target="_blank">AXERAS</a> is a turn-based tactical military SRPG developed by <a href="https://x.com/InverseAtelier" target="_blank">Inverse Atelier</a>.'
      +"<br>This project is heavily relying on AI movement where <a>GOAP</a> is implemented."
      +"<br><br>"
      +"My role during internship(3 months) was to <a>support team members in their work</a>"
      +"<br>which required me to <a>understand the entire project within a few weeks</a> and"
      +"<br>adapt to the environment as soon as possible."
      +"<br><br><br>"
      +'<h4>My tasks:</h4><div>'
      +"<br>·<a> Responsible for developing AI target-selection logic</a>"
      +"<br>· Refactored existing Scripts"
      +"<br>· Built <a>flexible UI windows</a >"
      +"<br>· Created <a>flexible AI control functions</a>"
      +"<br>· Created function to change Apperance Data for different models"
      +"<br>· Others: Voice-lines scripts/ Debugging/ Translation etc.</div>"
      +"<br><br><br>"
      +'<div class="overlay-content-attention">*ATTENTION: I cannot share original works here due to contract issue. Below are summarized version.</div>'
      +"<br><br>"
      ,
desc: [
  "A list I created for AI target selection, including attacking the player, covering teammates, and more.",
  "A scored parameter passed from Objective into ActionGoal, used by the logic chain to decide the next action."
    + "<br>These are user-defined parameters, meaning the class can store different data depending on the situation.",
  "In GOAP, ActionGoal represents the final action to be executed."
    + "<br>Since there are multiple runs, it also includes the core AI logic. <br> There are preview scripts, but since I didn’t create them, I can’t show them here. <br>By returning 'FireAction' as an IEnumerator to the preview, the AI can wait until the action is completed.",
  "A list I created for modifying model appearance data.",
  "This function is used to change model materials. <br>Since there are multiple models, I first look for the visual controller for them.<br>"
    + "By retrieving their renderers, different materials are assigned based on the controller type. <br> Materials are predefined by developers according to faction.",
  "A rough result showing materials changing based on faction. The change happens automatically at runtime.",
  "This is the interface created for the tutorial. The content and size are flexible, giving designers more control.<br>" + "It is built using Scriptable Objects and only updates when the player provides input.",
  "This is the final result for the Main Menu. All animations are done through code.",
  "This is the code used to create the Main Menu animations. It uses interfaces as references.<br>Actions are determined based on pointer events.",
  "This is the final result for the Result Screen. All animations are also done through code.<br>",
  "This is the animation sequence for the Result Screen. <br>It uses the WaitUntil function to wait for a signal indicating that the animation has finished.",
  "This is the exact animation code. <br>Everything is handled through code by calculating relative positions to produce the animations.<br><br><br><br>",

],

      image: [
        "Images/AXERAS/ActionGoalList.png",
        "Images/AXERAS/ActionGoalParam.png",
        "Images/AXERAS/ActionGoalCode.png",
        "Images/AXERAS/AppearanceDataList.png",
        "Images/AXERAS/AppearanceDataCode.png",
        "Images/AXERAS/MaterialChanged.png",
        "Images/AXERAS/UIworks.png",
        "Images/AXERAS/MainMenu.mp4",
        "Images/AXERAS/HoverEffect.png",
        "Images/AXERAS/ResultScreenVideo.mp4",
        "Images/AXERAS/ResultScreen.png",
        "Images/AXERAS/UnitResultText.png"],
    },
    VirtualEscape: {
      title: '<strong id="top">VirtualEscape</strong>',
      projectDesc:
      '<a href="https://alwaysbehappy.itch.io/virtual-escape" target="_blank">Virtual Escape</a> is a 2D puzzle-platformer, '
      +'<br>where players must die to create corpses in order to solve puzzles.'
      +'<br>This project was my <a>Final Year Project (FYP)</a>, which I completed within <a>12 weeks</a>.'
      +'<br>My role in this project was the <a>sole Game Programmer</a>,'
      +'<br>which required me to build a <a>clear, flexible and well-structured codebase</a>.'
      +"<br><br><br>"
      +'<h4>My Tasks:</h4><div>'
      +"<br>· Responsible for <a>managing the project</a>"
      +"<br>· Responsible for <a>developing the whole codebase</a>"
      +"<br>· Created all <a>User Interface(UI)</a> including <a>Dialogue, PauseMenu</a>, etc."
      +"<br>· Visual Effects Design: <a>Lighting, PostProcessing, ParticleSystem</a>, etc."
      +"<br>· <a>Code-based Cutscene & Animation</a>"
      +"<br>· Others: SaveSystem, EventSystem, CameraMovement in Math, etc.</div>"
      +"<br><br><br>"
      +"<h4>Intro:</h4>"
      +'<br><div>This project codebase follows <i><b class="overlay-content-ap">Singleton, Abstract Factory, Observer, Dependency Injection</b></i> etc. '
      +'<br>It follows principles like <i><b class="overlay-content-ap">SOLID, MVP</b></i> etc. as well.'
      +'<br>Due to <i><b class="overlay-content-ap">Time Constraints</b></i>, some parts have been hard-coded to meet the deadline.'
      +'<br>Improvements can be made if I have had more time.</div>'
      +'<br><a href="https://github.com/AlwaysBeHappy0420/VirtualEscape_FYP2025" target="_blank">Detailed Version</a> is in my Github, Feel free to check out.</div>'
      +'<br><br><br><a href="#Code">Bring me to development part</a>'
      ,
desc: [
  "This shows the core gameplay of the project, where the player uses corpses to solve puzzles.<br>The game takes many references from Persona 5 Royal, especially in the UI design.",//1
  "This is the game’s main menu, featuring buttons with different functions.<br>By placing it in a 3D space with environmental lighting and post-processing effects,<br>it achieves a stronger visual result.<br>",//2
  "The layout I designed for Level 1.<br>",//3
  "The layout I designed for Level 2.<br>",//4
  "The layout I designed for Level 3.<br>There are more levels, but they can’t all be shown here.",//5
  "These are the game settings. More options are available and will be introduced later.<br>The settings data is stored using ScriptableObjects to keep runtime records.",//6
  "Players have more control over the game, such as changing key bindings.<br>Text speed can also be adjusted since this game focuses heavily on UI.<br>There are also some smaller options for players to customize.",//7
  "The level selection panel allows players to save their progress.<br>This is stored in a static class, which avoids the time needed to connect to a server.<br>",//8
  "The pause menu is created using animations when the player presses the pause button.<br>",//9
  "Cutscenes are implemented through code.<br>By using a predefined linked-list sequence system for each level,<br>many events can be set up before the gameplay starts.",//10
  "TriggerObjects are part of the core system.<br>Instead of using Unity’s OnTriggerEnter directly, TriggerObjects provide a more flexible approach,<br>since they inherit from an abstract class and are easier to manage and track.<br>",//11
  'Camera movement is handled by adjusting the camera’s size and position.<br>By calculating relative positions, the camera finds a suitable view for each level.<br><br><br><br><br><br><br><h4><div id="Code">Coding Part</div></h4><br><h4 ><a href="#top">Bring me to the top</a></h4>',
  "All scripts go through the GameSceneManager.<br>Whenever one script needs to call another, it does so through the GameSceneManager.<br>At the same time, all functions follow a rule of only updating when the player provides input.<br>The Update function is avoided, as it often consumes unnecessary memory.",//13
  "There are many elements in a scene that may need to respond at the same time.<br>The Game Events Manager provides better control over these events.<br>Any object that needs to react must listen for specific events.<br>When an event is triggered, all listeners respond simultaneously.",//14
  "Since there are multiple levels, EventInfo helps determine which events should occur in each level.<br>This reduces the workload for developers when designing stages.<br>",//15
  "This is the abstract Sequence class, which only contains Execute and Finished functions.<br>",//16
  "This is an example of a sequence, such as dialogue.<br>There are others, like lighting control and level text animations.<br>Each sequence script only contains its own functions.<br>The Execute function starts from the beginning, and before the sequence finishes, player input<br>can move to the next dialogue using a pointer in a list that links to the next dialogue box<br>which is the next sequence script.",//17
  "The Director script runs sequences and TriggerObjects.<br>By checking the sequence status, it pauses execution until the current sequence finishes, up to the final one.<br>For TriggerObjects, it removes any that have already been triggered along with their sequences.",//18
  "This is the abstract Obstacle script.<br>Since obstacles often trigger events in the game, this serves as an important base class.<br>",//19
  "An example of an obstacle is FlameThrowerBase.<br>This can trigger a 'Destroy Corpse' event to remove the corpse.<br>",//20
  "The save system records the player’s position,<br>since checkpoints are an important part of solving puzzles in the gameplay.<br><br><br><br>",//21
],

      image: 
      [
        "Images/VirtualEscape/Gameplay.mp4",//1
        "Images/VirtualEscape/MainMenu.png",//2
        "Images/VirtualEscape/level1.png",//3
        "Images/VirtualEscape/level2.png",//4
        "Images/VirtualEscape/level3.png",//5
        "Images/VirtualEscape/Settings.png",//6
        "Images/VirtualEscape/MoreOptions.png",//7
        "Images/VirtualEscape/LevelSelection.png",//8
        "Images/VirtualEscape/PauseMenu.mp4",//9
        "Images/VirtualEscape/WalkInCutscene.mp4",//10
        "Images/VirtualEscape/TriggerObject.mp4",//11
        "Images/VirtualEscape/CameraMovement.mp4",//12
        "Images/VirtualEscape/GameSceneManager.png",//13
        "Images/VirtualEscape/GameEventManager.png",//14
        "Images/VirtualEscape/GameEventInfo.png",//15
        "Images/VirtualEscape/SequenceAbstract.png",//16
        "Images/VirtualEscape/DialogueSequence.png",//17
        "Images/VirtualEscape/Director.png",//18
        "Images/VirtualEscape/Obstacle.png",//19
        "Images/VirtualEscape/ObstacleSample.png",//20
        "Images/VirtualEscape/SaveSystem.png",//21
      ],
    },
  },

  zh: {
    AXERAS: {
      title: '<strong id="top">AXERAS</strong>',
      projectDesc:' <a href="https://store.steampowered.com/app/3873770/AXERAS/" target="_blank">AXERAS</a> 是一款由<a href="https://x.com/InverseAtelier" target="_blank">Inverse Atelier</a>开发的回合制战术军事类 SRPG。'
      +"<br>本项目高度依赖 AI 行动系统，并且依靠 <a>GOAP</a>来完成基本的AI指令。"
      +"<br><br>"
      +"我在实习期间（3个月）的主要职责是 <a>协助团队成员完成他们的工作</a>"
      +"<br>这要求我在几周内 <a>理解整个项目结构</a>，并且"
      +"<br>尽快 <a>适应开发环境</a>。"
      +"<br><br><br>"
      +'<h4>工作内容：</h4><div>'
      +"<br>· <a>负责开发 AI 目标选择逻辑</a>"
      +"<br>· 重构现有脚本"
      +"<br>· 构建 <a>灵活的 UI 窗口系统</a>"
      +"<br>· 创建 <a>灵活的 AI 控制函数</a>"
      +"<br>· 创建用于更换不同模型外观数据的功能"
      +"<br>· 其他：语音脚本 / 调试 / 翻译 等</div>"
      +"<br><br><br>"
      +'<div class="overlay-content-attention">*注意：由于合约限制，我无法在此展示原始内容。以下为总结版本。</div>'
      +"<br><br>"
      ,

desc: [
  "我制作的一个用于 AI 目标选择的列表，包括攻击玩家、掩护队友等行为。",
  "一个从 Objective 传递到 ActionGoal 的评分参数，用于逻辑链中决定下一步行动。"
    + "<br>这些是用户自定义参数，意味着该类可以根据不同情况存储不同的数据。",
  "在 GOAP 中，ActionGoal 代表最终要执行的动作。"
    + "<br>由于存在多次运行，它也包含了核心 AI 逻辑。 <br> 其中有一些预览脚本，因为不是我创建的，所以无法在这里展示。 <br>通过向预览返回 'FireAction' 作为 IEnumerator，AI 可以等待动作执行完成。",
  "我制作的一个用于修改模型外观数据的列表。",
  "这个函数用于更换模型材质。 <br>由于存在多个模型，我会先查找它们的视觉控制器。<br>"
    + "通过获取它们的渲染器，根据控制器类型分配不同的材质。 <br> 材质由开发者根据阵营预先定义。",
  "基于阵营自动切换材质的初步效果展示。该变化会在运行时自动进行。",
  "这是为教程系统制作的界面。内容和大小都具有灵活性，给予设计师更多控制权。<br>" 
    + "它基于 Scriptable Object 制作，并且只会在玩家输入时更新。",
  "这是主菜单的最终效果。所有动画都是通过代码实现的。",
  "这是实现主菜单动画的代码。它使用接口作为引用。<br>根据指针事件来判断执行的操作。",
  "这是结果界面的最终效果。所有动画同样都是通过代码实现的。<br>",
  "这是结果界面的动画流程。 <br>它使用 WaitUntil 函数来等待动画完成的信号。",
  "这是具体的动画实现代码。 <br>所有内容都通过代码处理，通过计算相对位置来实现动画效果。<br><br><br><br>",

],

      image: [
        "Images/AXERAS/ActionGoalList.png",
        "Images/AXERAS/ActionGoalParam.png",
        "Images/AXERAS/ActionGoalCode.png",
        "Images/AXERAS/AppearanceDataList.png",
        "Images/AXERAS/AppearanceDataCode.png",
        "Images/AXERAS/MaterialChanged.png",
        "Images/AXERAS/UIworks.png",
        "Images/AXERAS/MainMenu.mp4",
        "Images/AXERAS/HoverEffect.png",
        "Images/AXERAS/ResultScreenVideo.mp4",
        "Images/AXERAS/ResultScreen.png",
        "Images/AXERAS/UnitResultText.png"],
    },
    VirtualEscape: {
      title: '<strong id="top">Virtual Escape</strong>',
      projectDesc:
      '<a href="https://alwaysbehappy.itch.io/virtual-escape" target="_blank">Virtual Escape</a> 是一款2D解谜平台游戏，'
      +'<br>玩家必须通过死亡并制造尸体来解开谜题。'
      +'<br>该项目是我在 <a>12周</a> 内完成的 <a>Final Year Project（FYP）</a>。'
      +'<br>我在项目中担任 <a>唯一的游戏程序员</a>，'
      +'<br>这要求我构建一个 <a>清晰、灵活且结构良好的代码框架</a>。'
      +"<br><br><br>"
      +'<h4>工作内容：</h4><div>'
      +"<br>· 负责 <a>项目管理</a>"
      +"<br>· 负责 <a>整个代码架构的开发</a>"
      +"<br>· 制作所有 <a>用户界面(UI)</a>，包括 <a>对话系统、暂停菜单</a> 等"
      +"<br>· 视觉效果设计：<a>光照、后处理、粒子系统</a> 等"
      +"<br>· <a>基于代码的过场动画与角色动画</a>"
      +"<br>· 其他：存档系统、事件系统、基于数学的摄像机控制 等</div>"
      +"<br><br><br>"
      +"<h4>简介：</h4>"
      +'<br><div>本项目的代码架构采用了 <i><b class="overlay-content-ap">Singleton、Abstract Factory、Observer、Dependency Injection</b></i> 等设计模式。'
      +'<br>同时也遵循了 <i><b class="overlay-content-ap">SOLID 原则、MVP 架构</b></i> 等软件设计理念。'
      +'<br>由于 <i><b class="overlay-content-ap">时间限制</b></i>，部分内容为了赶进度而采用了硬编码方式实现。'
      +'<br>如果有更多时间，该项目仍有进一步优化与改进的空间。</div>'
      +'<br><a href="https://github.com/AlwaysBeHappy0420/VirtualEscape_FYP2025" target="_blank">详细版本</a>在Github中。请随意查看。</div>'
      +'<br><br><br><a href="#Code">到游戏开发部分</a>'
      ,
desc: [
  "这里展示了项目的核心玩法，玩家需要利用尸体来解谜。<br>本游戏在很多方面参考了《女神异闻录5 皇家版》，尤其是在 UI 设计上。",//1
  "这是游戏的主菜单，包含具有不同功能的按钮。<br>通过将其放置在 3D 空间中，并结合环境光与后期处理效果，<br>可以获得更好的视觉表现。<br>",//2
  "我为第一关设计的关卡布局。<br>",//3
  "我为第二关设计的关卡布局。<br>",//4
  "我为第三关设计的关卡布局。<br>还有更多关卡，但无法全部在这里展示。",//5
  "这些是游戏的设置选项。之后还会加入更多内容。<br>设置数据使用 ScriptableObject 进行存储，以便在运行时记录。",//6
  "玩家可以对游戏进行更多控制，例如修改按键绑定。<br>由于本游戏同样注重 UI，文本显示速度也可以调整。<br>此外，还有一些细节选项供玩家自行决定。",//7
  "关卡选择面板允许玩家保存游戏进度。<br>这些数据存储在一个静态类中，从而避免连接服务器所花费的时间。<br>",//8
  "当玩家按下暂停键时，暂停菜单会通过动画形式呈现。<br>",//9
  "过场动画通过代码实现。<br>通过为每个关卡使用预先定义的链表式序列系统，<br>可以在游戏开始前设置大量事件。",//10
  "TriggerObjects 是核心系统的一部分。<br>相比直接使用 Unity 的 OnTriggerEnter，TriggerObjects 提供了更灵活的方式，<br>因为它们继承自Abstract Class，更易于管理和追踪。<br>",//11
  '镜头移动通过调整摄像机的大小和位置来实现。<br>通过计算相对位置，摄像机会为当前关卡找到合适的视角。<br><br><br><br><br><br><br><h4><div id="Code">代码部分</div></h4><br><h4 ><a href="#top">返回顶部</a></h4>',
  "所有脚本都需要通过 GameSceneManager。<br>当一个脚本需要调用另一个脚本时，必须先通过 GameSceneManager。<br>同时，所有函数都遵循只有在玩家输入时才更新的原则。<br>尽量避免使用 Update 函数，因为它通常会消耗不必要的内存。",//13
  "在一个场景中，可能会有多个对象需要同时检测并响应行为。<br>Game Events Manager 可以更好地管理这些事件。<br>任何需要作出反应的对象都必须监听对应事件。<br>当事件被触发时，所有监听者将同时执行动作。",//14
  "由于存在多个关卡，EventInfo 可以帮助决定哪些事件应该在对应关卡中发生。<br>这能减少开发者在设计关卡时的工作量。<br>",//15
  "这是 Sequence的Abstract Class ，只包含 Execute 和 Finished 两个函数。<br>",//16
  "这是一个Sequence的示例，例如对话。<br>还有其他类型，比如灯光控制和关卡文字动画。<br>每个Sequence脚本只包含自身相关的函数。<br>Execute 函数会从开头执行，在Sequence结束之前，玩家可以通过输入，<br>根据链表中的Pointer跳转到下一个对话框，<br>也就是下一个Sequence脚本。",//17
  "Director 脚本负责执行Sequence和 TriggerObjects。<br>通过检测Sequence状态，它会暂停流程直到当前Sequence结束，直到最后一个Sequence完成。<br>对于 TriggerObjects，它会移除所有已经被触发过的对象。",//18
  "这是 Obstacle 的Abstract Class。<br>由于游戏中障碍物经常会触发事件，因此这是一个非常重要的基类。<br>",//19
  "FlameThrowerBase 是一个Obstacle的示例。<br>它可以触发“Destroy Corpse”事件来销毁尸体。<br>",//20
  "存档系统用于记录玩家的位置，<br>因为检查点是解谜玩法中的一个重要组成部分。<br><br><br><br>",//21
],

      image: 
      [
        "Images/VirtualEscape/Gameplay.mp4",//1
        "Images/VirtualEscape/MainMenu.png",//2
        "Images/VirtualEscape/level1.png",//3
        "Images/VirtualEscape/level2.png",//4
        "Images/VirtualEscape/level3.png",//5
        "Images/VirtualEscape/Settings.png",//6
        "Images/VirtualEscape/MoreOptions.png",//7
        "Images/VirtualEscape/LevelSelection.png",//8
        "Images/VirtualEscape/PauseMenu.mp4",//9
        "Images/VirtualEscape/WalkInCutscene.mp4",//10
        "Images/VirtualEscape/TriggerObject.mp4",//11
        "Images/VirtualEscape/CameraMovement.mp4",//12
        "Images/VirtualEscape/GameSceneManager.png",//13
        "Images/VirtualEscape/GameEventManager.png",//14
        "Images/VirtualEscape/GameEventInfo.png",//15
        "Images/VirtualEscape/SequenceAbstract.png",//16
        "Images/VirtualEscape/DialogueSequence.png",//17
        "Images/VirtualEscape/Director.png",//18
        "Images/VirtualEscape/Obstacle.png",//19
        "Images/VirtualEscape/ObstacleSample.png",//20
        "Images/VirtualEscape/SaveSystem.png",//21
      ],
    },
  },

  jp: {
    AXERAS: {
      title: '<strong id="top">AXERAS</strong>',
      projectDesc: ' <a href="https://store.steampowered.com/app/3873770/AXERAS/" target="_blank">AXERAS</a> は、<a href="https://x.com/InverseAtelier" target="_blank">Inverse Atelier</a>が開発しているターン制タクティカル・ミリタリー系SRPGです。'
      +"<br>本プロジェクトでは<a> GOAP</a> を実装して、AIの行動ロジックが中核となっております。"
      +"<br><br>"
      +"私のインターンシップ期間（3か月）における役割は、<a>チームメンバーの業務支援</a>でした。"
      +"<br>そのため、短期間で <a>プロジェクト全体の構造を把握</a> し、"
      +"<br>可能な限り早く <a>開発環境に適応すること</a> が求められました。"
      +"<br><br><br>"
      +'<h4>担当業務：</h4><div>'
      +"<br>· <a>AIのターゲット選択ロジックの開発を担当</a>"
      +"<br>· 既存スクリプトのリファクタリング"
      +"<br>· <a>柔軟性の高いUIウィンドウの構築</a>"
      +"<br>· <a>柔軟性の高いAI制御関数の作成</a>"
      +"<br>· 各モデルに対応した外観データ切り替え機能の実装"
      +"<br>· その他：ボイス関連スクリプト作成 / デバッグ / 翻訳 など</div>"
      +"<br><br><br>"
      +'<div class="overlay-content-attention">※注意：契約上の理由により、原作業物を公開することはできません。以下は内容を要約したものです。</div>'
      +"<br><br>"
      ,

desc: [
  "AIのターゲット選択用に作成したリストで、プレイヤーへの攻撃、味方の援護などを含んでいます。",
  "Objective から ActionGoal に渡されるスコア付きパラメータで、ロジックチェーンが次の行動を決定するために使用されます。"
    + "<br>これらはユーザー定義パラメータであり、状況に応じてクラス内に異なるデータを持たせることができます。",
  "GOAP において、ActionGoal は最終的に実行される行動を表します。"
    + "<br>複数回の実行があるため、AIのコアロジックも含まれています。 <br> 一部にプレビュースクリプトがありますが、私が作成したものではないため、ここでは公開できません。 <br>プレビュー側に 'FireAction' を IEnumerator として返すことで、AIは行動の完了を待機できます。",
  "モデルの外観データを変更するために作成したリストです。",
  "この関数はモデルのマテリアルを変更するためのものです。 <br>複数のモデルがあるため、まずビジュアルコントローラーを探します。<br>"
    + "レンダラーを取得し、コントローラーの種類に応じて異なるマテリアルを割り当てます。 <br> マテリアルは陣営ごとに開発側で事前定義されています。",
  "陣営に基づいてマテリアルが自動的に切り替わる途中結果の例です。実行時に自動で変更されます。",
  "チュートリアル用に作成したインターフェースです。<br>内容やサイズは柔軟に変更でき、デザイナーが制御しやすい構成になっています。<br>" 
    + "Scriptable Object を使用して作成されており、プレイヤーが入力した時のみ更新されます。",
  "メインメニューの最終結果です。すべてのアニメーションはコードで実装しています。",
  "メインメニューのアニメーションを実現するためのコードです。<br>インターフェースを参照として使用しています。<br>ポインターイベントに基づいて処理を分岐させています。",
  "結果画面です。こちらもすべてのアニメーションはコードで実装しています。<br>",
  "結果画面のアニメーションSequenceスです。 <br>WaitUntil 関数を使用して、アニメーション完了のシグナルを待機しています。",
  "具体的なアニメーション実装コードです。 <br>すべてコードで処理されており、相対位置を計算してアニメーションを実現しています。<br><br><br><br>",

],

      image: [
        "Images/AXERAS/ActionGoalList.png",
        "Images/AXERAS/ActionGoalParam.png",
        "Images/AXERAS/ActionGoalCode.png",
        "Images/AXERAS/AppearanceDataList.png",
        "Images/AXERAS/AppearanceDataCode.png",
        "Images/AXERAS/MaterialChanged.png",
        "Images/AXERAS/UIworks.png",
        "Images/AXERAS/MainMenu.mp4",
        "Images/AXERAS/HoverEffect.png",
        "Images/AXERAS/ResultScreenVideo.mp4",
        "Images/AXERAS/ResultScreen.png",
        "Images/AXERAS/UnitResultText.png"],
    },
    VirtualEscape: {
      title: '<strong id="top">Virtual Escape</strong>',
      projectDesc:
      '<a href="https://alwaysbehappy.itch.io/virtual-escape" target="_blank">Virtual Escape</a> は2Dパズルプラットフォーマーゲームです。'
      +'<br>プレイヤーは死亡して死体を生成し、それを使ってパズルを解くのです。'
      +'<br>このプロジェクトは、<a>12週間</a> で完成させた私の <a>Final Year Project（FYP）</a> です。'
      +'<br>私は <a>唯一のゲームプログラマー</a> として、'
      +'<br>コードベース全体の設計・実装・最適化を担当しました。'
      +"<br><br><br>"
      +'<h4>担当業務：</h4><div>'
      +"<br>· <a>プロジェクト管理</a> 全般"
      +"<br>· <a>コードベース全体の設計・開発</a>"
      +"<br>· <a>ユーザー インターフェース(UI)</a> の作成"
      +"<br>· ビジュアルエフェクト設計：<a>ライティング、ポストプロセッシング</a> 等"
      +"<br>· <a>コードによるカットシーン・アニメーション</a>"
      +"<br>· その他：セーブシステム、イベントシステム、カメラ制御 等</div>"
      +"<br><br><br>"
      +"<h4>技術概要：</h4>"
      +'<br><div>本プロジェクトでは、<i><b class="overlay-content-ap">Singleton、Abstract Factory、Observer、Dependency Injection</b></i> <br>などのデザインパターンを適用しています。'
      +'<br><br>さらに、<i><b class="overlay-content-ap">SOLID原則、MVPアーキテクチャ</b></i> などのソフトウェア設計原則に従い、<br>保守性・拡張性の高いコードを構築しました。'
      +'<br><br>限られた <i><b class="overlay-content-ap">開発期間</b></i> の中で、一部は進捗優先でハードコーディングしていますが、'
      +'<br>時間があればさらなる改善・最適化が可能です。</div>'
      +'<br><a href="https://github.com/AlwaysBeHappy0420/VirtualEscape_FYP2025" target="_blank">詳細なバージョン</a>はGitHubにあります。ぜひご覧ください。</div>'
      +'<br><br><br><a href="#Code">ゲーム開発の詳細へ</a>'
      ,

desc: [
  "これはプロジェクトのコアゲームプレイを示しています。プレイヤーは遺体を使ってパズルを解きます。<br>ゲームは特にUIデザインにおいて『ペルソナ5 ロイヤル』から多くの要素を参考にしています。",//1
  "これはゲームのメインメニューで、さまざまな機能を持つボタンが配置されています。<br>3D空間に配置し、環境光やポストプロセス効果を加えることで、<br>より良いビジュアル結果を得られます。<br>",//2
  "私が設計したレベル1のレイアウト。<br>",//3
  "私が設計したレベル2のレイアウト。<br>",//4
  "私が設計したレベル3のレイアウト。<br>他にも多くのレベルがありますが、ここではすべて表示できません。",//5
  "これはゲームの設定です。さらに多くのオプションがあり、後で紹介されます。<br>設定データは ScriptableObject を使って保存され、ランタイムで記録されます。",//6
  "プレイヤーはキー設定の変更など、ゲームをより細かく制御できます。<br>UIに重点を置いたゲームのため、テキスト速度も調整可能です。<br>その他、プレイヤーが選択できる細かい設定もあります。",//7
  "レベル選択パネルは、プレイヤーが進行状況を保存できるようにします。<br>これはStaticクラスに保存され、サーバーへ接続せずに時間を節約できます。<br>",//8
  "Pausedメニューは、Escボタンを押したときにアニメーションで表示されます。<br>",//9
  "カットシーンはコードで実装されています。<br>各レベルに対して事前定義されたリンクリスト式Sequenceを使用することで、<br>ゲーム開始前に多くのイベントを設定できます。",//10
  "TriggerObjects はコアシステムの一部です。<br>Unity の OnTriggerEnter を直接使用する代わりに、TriggerObjects はより柔軟な方法を提供します。<br>抽象クラスを継承しているため、管理や追跡が容易です。<br>",//11
  'カメラの移動は、カメラのサイズと位置を調整することで実現されます。<br>相対位置を計算することで、各レベルに適した視点をカメラが見つけます。<br><br><br><br><br><br><br><h4><div id="Code">コード部分</div></h4><br><h4 ><a href="#top">トップに戻る</a></h4>',//12
  "すべてのスクリプトは GameSceneManager を経由します。<br>スクリプトが他のスクリプトを呼び出す場合、必ず GameSceneManager 経由で行います。<br>同時に、すべての関数はプレイヤー入力があった場合のみ更新されるルールに従います。<br>多くの場合、不要なメモリを消費するため、Update 関数の使用は避けております。",//13
  "シーン内では、同時に複数の要素がアクションをチェックする必要があります。<br>Game Events Manager は、これらのイベントをより良く管理できます。<br>反応する必要のあるオブジェクトは、特定のイベントをリッスンする必要があります。<br>イベントがトリガーされると、すべてのリスナーが同時に動作します。",//14
  "複数のレベルがあるため、EventInfo はどのイベントがどのレベルで発生するかを判断するのに役立ちます。<br>これにより、開発者がレベルを設計する際の作業負荷が軽減されます。<br>",//15
  "これは抽象的な Sequence クラスで、Execute と Finished 関数のみを含みます。<br>",//16
  "これはSequenceの例で、例えば会話です。<br>他にも、照明制御やレベルテキストのアニメーションなどがあります。<br>各Sequenceスクリプトは自身の関数のみを保持します。<br>Execute 関数は最初から開始し、Sequenceが終了する前にプレイヤー入力により、<br>リスト内のポインタを使って次のダイアログボックスに移動できます。<br>これは次のSequenceスクリプトでもあります。",//17
  "Director は、Sequenceと TriggerObjects を実行します。<br>Sequenceの状態を確認し、現在のSequenceが終了するまで処理を一時停止します。最後のSequenceまで同様です。<br>TriggerObjects に関しては、すでにトリガーされたオブジェクトを削除します。",//18
  "これは抽象的な Obstacle スクリプトです。<br>ゲーム内でObstacleはイベントを頻繁にトリガーするため、重要な基底クラスとなります。<br>",//19
  "Obstacleの例として FlameThrowerBase があります。<br>これは『Destroy Corpse』イベントをトリガーして、遺体を消去することができます。<br>",//20
  "セーブシステムはプレイヤーの位置を記録します。<br>チェックポイントはパズルを解く上で重要な要素だからです。<br><br><br><br>",//21
],

      image: 
      [
        "Images/VirtualEscape/Gameplay.mp4",//1
        "Images/VirtualEscape/MainMenu.png",//2
        "Images/VirtualEscape/level1.png",//3
        "Images/VirtualEscape/level2.png",//4
        "Images/VirtualEscape/level3.png",//5
        "Images/VirtualEscape/Settings.png",//6
        "Images/VirtualEscape/MoreOptions.png",//7
        "Images/VirtualEscape/LevelSelection.png",//8
        "Images/VirtualEscape/PauseMenu.mp4",//9
        "Images/VirtualEscape/WalkInCutscene.mp4",//10
        "Images/VirtualEscape/TriggerObject.mp4",//11
        "Images/VirtualEscape/CameraMovement.mp4",//12
        "Images/VirtualEscape/GameSceneManager.png",//13
        "Images/VirtualEscape/GameEventManager.png",//14
        "Images/VirtualEscape/GameEventInfo.png",//15
        "Images/VirtualEscape/SequenceAbstract.png",//16
        "Images/VirtualEscape/DialogueSequence.png",//17
        "Images/VirtualEscape/Director.png",//18
        "Images/VirtualEscape/Obstacle.png",//19
        "Images/VirtualEscape/ObstacleSample.png",//20
        "Images/VirtualEscape/SaveSystem.png",//21
      ],
    },
  },
};


const translations = {
  en: {
    info: "PDFs",
    hero_title: "Hello, This is <span>Lee Wei Xuan</span>",
    hero_desc:
      "I am a Malaysian game developer, and you’ve come to the right place if you’re looking for a strong and reliable one.",
    view_work: "View My Work",
    about_title: "About Me",
    about_desc:
      'I\'m Lee Wei Xuan, and this is my <b>personal website</b> hosted on GitHub. It’s <a href="https://github.com/AlwaysBeHappy0420/AlwaysBeHappy_LeeWeiXuan" target="_blank">open source</a>, so feel free to use the template.<br>' +
      'Holding <a href="https://study.utar.edu.my/game-development.php" target="_blank">Bachelor of Science(Honours) Game Development</a><b>(CPGA 3.2 out of 4)</b> from Universiti Tunku Abdul Rahman in Selangor, Malaysia.<br><br>',
    about_desc2:
      "<h3>Working Experiences:</h3><br>" +
      "- <i>Worked in <b>Inverse Atelier</b> as a <b>Game Programmer Intern</b> from June2025 to Oct2025</i>"
      +"<br><br><br>",
      card01:"Studied at UTAR",
      card02:"Internship at<br>Inverse Atelier",
      card03:"Graduated from UTAR",
    about_desc3:
      "<h3>These describe me well:</h3> " +
      "<b><h4>Skillsets:</h4></b><br>" +
      "・I love <b><i>Unity</i></b>, experienced in 2D/3D C# Coding, including <b><i>Shader Programming, Profiling, Debugging, Optimization, Networking</i></b>.<br><br>" +
      "・I love <b><i>Unreal</i></b> as well, not that much compared to Unity, but have experiences with <b><i>Blueprint</i></b> & <b><i>C/C++</i></b>.<br><br>" +
      "・I <b><i>make websites</i></b>. Not very detailed, but enough to show what I want to show. Using languages like: <b><i>JavaScript, HTML, CSS, php, MySQL...</i></b><br><br>" +
      "・I love & hate <b><i>Dev Logging</i></b>. Don't get me wrong. I'm good at concluding things. It just takes me a lot of time.<br><br>" +
      "・<b><i>Communicating</i></b> is a skill. TBH, I'm not good at this because of most of the time I would prefer solve it by myself first, and in the end I can solve it by myself.<br><br>" +
      "・Learned <b><i>Japanese(N1). Native in English, Chinese(Simplified/Traditional), Malay, Hakka, Cantonese, some Hokkien.</i></b><br><br><br>",
    about_desc4:
      "<b><h4>Mindset:</h4></b><br>" +
      '・I do <b><i>enjoy the process of developing a game</i></b>, since it always gives me a sense "Someone is actually using/playing what I have done", and I enjoy it so much.<br><br>' +
      "・A hot take from me: &nbsp;&nbsp;<b><i>If one is describable, one is scriptable.</i></b><br><br>" +
      "・I am <b><i>curious in new things</i></b> which leads me to know more about the world.<br><br>" +
      '・I would <b><i>like to know "why" behind every question</i></b> and task which leads me to have high understanding of the item.<br><br>' +
      "・I can <b><i>work well under pressure</i></b>, and I'm <b><i>concious of time.</i></b><br><br>",
    projects_title: "Projects",
    project1_title: "AXERAS",
    project1_desc: "Project participated during internship",
    project2_title: "Virtual Escape",
    project2_desc: "Final Year Project for UTAR 2025",
    contact_title: "Contact",
    WorkTitle:"Current Work",
    WorkContent:
    '<img src="Images/tick.png" class="WorkContent-img"> Animator, C#Scripts, Basic Math in Unity.<br>' +
    '<img src="Images/tick.png" class="WorkContent-img"> C/C++ basics, HTML, CSS, JavaScript, PHP, MySQL.<br>' +
    '<img src="Images/tick.png" class="WorkContent-img"> Animation, DSA, 3D Modeling.<br>' +
    '<img src="Images/tick.png" class="WorkContent-img"> UE Blueprint, Mobile Game Development.<br>' +
    '<img src="Images/tick.png" class="WorkContent-img"> DesignPattern, RendererFeature Basics, ShaderGraph, GameAI.<br>' +
    '<img src="Images/tick.png" class="WorkContent-img"> Internship.<br>' +
    "<br><h3>On-Going</h3><br>Improving my skills on Unity HLSL, Renderer Feature, and UE C/C++"
  },

  zh: {
    info: "PDFs",
    hero_title: "这里是 <span>李维旋</span> 的个人网站",
    hero_desc:
      "我是一名马来西亚的游戏开发者，如果你正在寻找一位有充足实力、值得信赖的游戏开发人员，这里是正确的选择。",
    view_work: "查看我的作品",
    about_title: "关于我",
    about_desc:
      '这是我，李维旋经由Github正经营着的 <b>个人网站</b>。 这个网站目前处于<a href="https://github.com/AlwaysBeHappy0420/AlwaysBeHappy_LeeWeiXuan" target="_blank">开源</a>状态, 倘若需要，可以直接下载。<br>' +
      '持有<a href="https://study.utar.edu.my/game-development.php" target="_blank">Bachelor of Science(Honours) Game Development（游戏开发）</a><b>(CPGA 3.2 out of 4)</b> 的文凭，毕业于 Universiti Tunku Abdul Rahman，位于Selangor, Malaysia.<br><br>',
    about_desc2:
      "<h3>工作经历:</h3><br>" +
      "- <i>在<b>Inverse Atelier</b> 担任<b>实习游戏开发人员</b>，时期：2025年6月 至 2025年 10月</i>"
      +"<br><br><br>",
      card01:"就读于UTAR",
      card02:"在Inverse Atelier实习",
      card03:"毕业于UTAR",
    about_desc3:
      "<h3>个人特质:</h3> " +
      "<b><h4>技能:</h4></b><br>" +
      "・专精于<b><i>Unity</i></b>, 可熟悉运用 2D以及3D C# Coding, 包括但不限于 <b><i>Shader Programming, Profiling, Debugging, Optimization, Networking</i></b>进行游戏开发。<br><br>" +
      "・有使用<b><i>虚幻引擎(Unreal Engine)</i></b> 的经验, 可使用<b><i>Blueprint</i></b> & <b><i>C/C++</i></b>进行游戏开发。<br><br>" +
      "・有制作 <b><i>个人网站</i></b>的经验。熟悉使用以下语言： <b><i>JavaScript, HTML, CSS, php, MySQL...</i></b><br><br>" +
      "・熟悉写<b><i>开发日志</i></b>。<br><br>" +
      "・不擅长与人进行口头表达上的<b><i>沟通</i></b>，但文字表达上相对流畅。<br><br>" +
      "・获得<b><i>日语(N1)准证. 母语为英文，中文（简体/繁体），马来文，客家语，粤语，一部分福建话（闽南语）</i></b><br><br><br>",
    about_desc4:
      "<b><h4>个人思想:</h4></b><br>" +
      "・享受 <b><i>开发游戏的过程</i></b>， 因为它总能给我提供一种成就感。<br><br>" +
      "・个人口头禅： &nbsp;&nbsp;<b><i>如果一样事情可以被描述，那么它就可以被程序编写。</i></b><br><br>" +
      "・抱有 <b><i>对新事物的好奇心</i></b>，因其总能让我认识新的世界。<br><br>" +
      "・抱有 <b><i>对事物追根究底的精神</i></b>，因其总能让我理解事物运转的逻辑。<br><br>" +
      "・在<b><i>压力下也能有良好表现</i></b>，也绝<b><i>不会延迟事物的完成日期</i></b>。<br><br>",
    projects_title: "项目",
    project1_title: "AXERAS",
    project1_desc: "实习时期参与的项目",
    project2_title: "Virtual Escape",
    project2_desc: "毕业前所制作的游戏",
    contact_title: "联系我",
    WorkTitle:"当前进度",
    WorkContent:
    "<b>已学习</b> - Unity 基础：Animator，C# 脚本，基础数学在 Unity 中的应用。<br>" +
    "<b>已学习</b> - C/C++ 基础，HTML，CSS，JavaScript，PHP，MySQL。<br>" +
    "<b>已学习</b> - 动画原理，游戏物理，数据结构与算法，基础 3D 建模。<br>" +
    "<b>已学习</b> - 虚幻引擎Blueprint，手机游戏开发。<br>" +
    "<b>已学习</b> - 脚本设计模式，Unity Renderer Feature 基础，Shader Graph，游戏 AI。<br>" +
    "<b>已学习</b> - 实习。<br>" +
    "<b>进行中</b> - 目前正在提升 Unity HLSL、Renderer Feature 以及 UE C/C++ 的技能"

  },

  jp: {
    info: "PDFs",
    hero_title: "<span>リ イセン</span> の個人サイト",
    hero_desc:
      "優秀で信頼できるゲーム開発者をお探しでしたら、ここはまさにうってつけの場所です。",
    view_work: "作品を見る",
    about_title: "自己紹介",
    about_desc:
      'ここは私、李維旋（リ イセン）がGithubを通じて運営している <b>個人サイト</b> です。このサイトは現在 <a href="https://github.com/AlwaysBeHappy0420/AlwaysBeHappy_LeeWeiXuan" target="_blank">オープンソース</a> として公開されており、必要であれば直接ダウンロード可能です。<br>' +
      '<a href="https://study.utar.edu.my/game-development.php" target="_blank">Bachelor of Science(Honours) Game Development（ゲーム開発）</a><b>(CGPA 4点満点中3.2)</b> の学位を取得し、マレーシア・セランゴール州のUniversiti Tunku Abdul Rahmanを卒業しました。<br><br>',
    about_desc2:
      "<h3>職務経歴:</h3><br>" +
      "- <i><b>Inverse Atelier</b> にて <b>ゲーム開発インターン</b> として勤務、期間：2025年6月 ～ 2025年10月</i>" +
      "<br><br><br>",
card01: "UTARに在学",
card02: "Inverse Atelierで<br>インターンシップ",
card03: "UTARを卒業",

    about_desc3:
      "<h3>個人特質:</h3> " +
      "<b><h4>スキル:</h4></b><br>" +
      "・<b><i>Unity</i></b> を専門とし、2Dおよび3DのC#コーディングに精通しています。<b><i>シェーダープログラミング、プロファイリング、デバッグ、最適化、ネットワーク</i></b> などを含むゲーム開発が可能です。<br><br>" +
      "・<b><i>Unreal Engine</i></b> の使用経験があり、<b><i>Blueprint</i></b> および <b><i>C/C++</i></b> を用いたゲーム開発が可能です。<br><br>" +
      "・<b><i>個人サイト</i></b> の制作経験があります。以下の言語の使用に精通しています： <b><i>JavaScript, HTML, CSS, php, MySQL...</i></b><br><br>" +
      "・<b><i>開発ログ</i></b> の作成に慣れています。<br><br>" +
      "・口頭での<b><i>コミュニケーション</i></b>はあまり得意ではありませんが、文章での表現は比較的得意です。<br><br>" +
      "・<b><i>日本語(N1)資格取得。母語は英語、中国語（簡体字／繁体字）、マレー語、客家語、広東語、一部福建語（閩南語）</i></b><br><br><br>",
    about_desc4:
      "<b><h4>個人の考え:</h4></b><br>" +
      "・<b><i>ゲーム開発の過程を心から楽しんでおり</i></b>、一つ一つの制作工程が大きな達成感につながっています。<br><br>" +
      "・<b><i>「記述可能なものは、すべてプログラムによって実現できる。」</i></b>と個人の考えです。<br><br>" +
      "・<b><i>常に新しい物事に好奇心を持ち</i></b>、それを通して新しい世界や価値観を学び続けています。<br><br>" +
      "・<b><i>物事を徹底的に追究する姿勢を強みとしており</i></b>、常に「なぜそう動くのか」という論理を理解することを大切にしています。。<br><br>" +
      "・<b><i>プレッシャーのかかる状況でも安定したパフォーマンスを発揮でき、期限を守ることを徹底しています。</i></b><br><br>",
    projects_title: "プロジェクト",
    project1_title: "AXERAS<br>（アックセラス）",
    project1_desc: "インターンシップ期間中に開発に参加したプロジェクト",
    project2_title: "Virtual Escape<br>（ヴァーチャル・エスケープ）",
    project2_desc: "大学卒業前に制作したゲーム",
    contact_title: "連絡先",
    WorkTitle:"現在の学習状況",
    WorkContent:
    "<b>勉強済み</b> - Unity 基礎：Animator、C# スクリプト、Unity における基礎数学の実装。<br>" +
    "<b>勉強済み</b> - C/C++ 基礎、HTML、CSS、JavaScript、PHP、MySQL。<br>" +
    "<b>勉強済み</b> - アニメーション原理、ゲーム物理、データ構造とアルゴリズム、基本的な 3D モデリング。<br>" +
    "<b>勉強済み</b> - UE Blueprint、モバイルゲーム開発。<br>" +
    "<b>勉強済み</b> - デザインパターン、Unity Renderer Feature 基礎、Shader Graph、ゲーム AI。<br>" +
    "<b>勉強済み</b> - インターンシップ。<br>" +
    "<b>進行中</b> - Unity HLSL、Renderer Feature、および UE C/C++ のスキル向上に取り組んでいます"

  },
};
