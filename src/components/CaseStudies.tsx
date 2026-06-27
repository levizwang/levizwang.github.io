import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { useT, ui, type L } from '../i18n/lang';
import { type PostId } from '../data/posts';
import { TagPill } from './ui/TagPill';
import {
  evalPipeline as pipelineImage,
  agentAsJudge as judgeImage,
  harbor as harborImage,
  nvwa as nvwaImage,
} from '../images/projects';

interface Spec {
  k: string;
  v: L;
}
interface Study {
  eyebrow: L;
  title: L;
  body: L;
  image: string;
  specs: Spec[];
  link?: { href: string; label: L };
  article?: PostId;
  tags: string[];
}

const STUDIES: Study[] = [
  {
    eyebrow: { en: 'Evidence-grounded synthesis', zh: '证据约束合成' },
    title: {
      en: 'Turning expert files into eval tasks that cannot be guessed.',
      zh: '把专家文件变成无法靠猜完成的评测任务。',
    },
    body: {
      en: 'I built a public-safe version of this story around the core idea: the generator is not trusted. Source files are first converted into locator-bound evidence, then independent roles draft, critique, verify, and package the task. Before delivery, the task is checked for answer leakage, unsupported claims, and guessability. The internal node layout and prompts are deliberately omitted; what matters publicly is the contract: every answerable claim must point back to source evidence, and removing the files should make the task fail.',
      zh: '这条经历的公开版本围绕一个核心原则：不信任生成器。原始文件先被转化为带 locator 的证据，再由独立角色完成出题、挑刺、核验与打包。交付前会检查答案泄漏、无证据断言与可蒙性。内部节点结构和 prompt 配方刻意不公开；公开可讲的是契约：每个可回答断言必须能回到源证据，抽走文件后任务就应该失败。',
    },
    specs: [
      { k: 'Evidence first', v: { en: 'locator-bound facts before prompt drafting', zh: '先绑定证据，再写题面' } },
      { k: 'Role separation', v: { en: 'author, verifier, judge, and QC kept independent', zh: '出题、核验、判分、质检角色隔离' } },
      { k: 'Anti-guessing', v: { en: 'tasks must depend on reading the files', zh: '题目必须依赖真实读文件' } },
      { k: 'Delivery gate', v: { en: 'leakage, unsupported-claim, and rubric checks', zh: '泄漏、无证据断言与 rubric 门控' } },
    ],
    image: pipelineImage,
    article: 'evidence-ledger',
    tags: ['Evidence ledger', 'Anti-leakage', 'Synthetic eval data'],
  },
  {
    eyebrow: { en: 'Verifier research', zh: 'Verifier 研究' },
    title: {
      en: 'Choosing when an agent judge beats a metric.',
      zh: '判断 agent judge 什么时候胜过 metric。',
    },
    body: {
      en: 'I compared two grading routes for office-document agent tasks: deterministic rubric metrics and an agent judge that can inspect the artifact, gather evidence, and reason against the rubric. The publishable takeaway is qualitative, not vendor-specific: LLM judges are not automatically better, and metrics are not automatically safer. The right choice depends on evidence access, rubric granularity, expected variance, and the cost of false positives. I folded the result into a Verifier product with visual evidence paths and guardrails for missing or unreadable inputs.',
      zh: '我对比过 Office 文档智能体任务的两条判分路线：确定性 rubric metric，以及能够打开产物、采集证据并按 rubric 推理的 agent judge。公开可讲的结论是定性的，而不是绑定某个厂商：LLM 裁判不天然更好，metric 也不天然更安全。选择取决于证据访问方式、rubric 粒度、可容忍方差与误判成本。实验结果最后进入 Verifier 产品，包含视觉证据路径，以及对输入缺失/不可读的防幻觉 guardrail。',
    },
    specs: [
      { k: 'Metric route', v: { en: 'deterministic checks where structure is stable', zh: '结构稳定时使用确定性检查' } },
      { k: 'Agent route', v: { en: 'evidence gathering where artifact semantics matter', zh: '语义和证据复杂时使用 agent 采证' } },
      { k: 'Reason guard', v: { en: 'avoid hallucinated explanations on missing evidence', zh: '证据缺失时限制幻觉解释' } },
      { k: 'Dashboard', v: { en: 'compare quality, cost, and latency before shipping', zh: '交付前比较质量、成本与时延' } },
    ],
    image: judgeImage,
    article: 'agent-as-judge',
    tags: ['Agent-as-judge', 'Verifier', 'Cost-aware eval'],
  },
  {
    eyebrow: { en: 'Eval execution', zh: '评测执行' },
    title: {
      en: 'Running model families through the same harness surface.',
      zh: '把多个模型族跑在同一套 harness 表面上。',
    },
    body: {
      en: 'Evaluation infrastructure breaks in the gaps between model APIs, harnesses, sandboxes, and file outputs. I extended a containerized execution framework so model families could be compared on the same task surface, then separated a reusable harness adapter onto a clean public fork. The public version highlights the engineering surface: provider routing, trajectory capture, sandbox fan-out, smoke tests, retry discipline, and cost/latency accounting. Environment-specific glue and private deployment details stay out.',
      zh: '评测基础设施最容易坏在模型 API、harness、沙箱与文件输出之间的缝隙里。我扩展了一套容器化执行框架，让多个模型族能在同一任务表面上比较，并把可复用 harness adapter 单独剥离到干净公开 fork。公开版本强调工程表面：provider 路由、轨迹采集、沙箱 fan-out、冒烟测试、失败重跑纪律与成本/时延核算。环境胶水与私有部署细节不公开。',
    },
    specs: [
      { k: '6 families', v: { en: 'model comparison without changing task format', zh: '同一任务格式下横向比较模型' } },
      { k: '5 harnesses', v: { en: 'normalize different agent execution styles', zh: '归一不同 agent 执行方式' } },
      { k: 'Clean fork', v: { en: 'reusable integration separated from private glue', zh: '可复用集成与私有胶水隔离' } },
      { k: 'Ops loop', v: { en: 'smoke, run, score, rerun, package', zh: '冒烟、运行、判分、重跑、打包' } },
    ],
    image: harborImage,
    link: { href: 'https://github.com/levizwang/harbor', label: { en: 'View the fork', zh: '查看 fork' } },
    tags: ['Cloud fan-out', 'Agent harnesses', 'Open source fork'],
  },
  {
    eyebrow: { en: 'Adversarial QC', zh: '对抗式质检' },
    title: {
      en: 'Treating synthetic data as guilty until proven clean.',
      zh: '默认合成数据有罪，直到证明它干净。',
    },
    body: {
      en: 'For synthetic clinical and office-document data, I used an adversarial loop rather than trusting one generator pass. A generator creates the case, a critic turns defects into structured findings, and an arbiter decides whether to revise, rework, or pass. The durable part is not the medical content itself; it is the defect taxonomy and the feedback loop: derived-value drift, cross-file contradictions, impossible timelines, template contamination, metadata leakage, and rubrics that cannot be answered from the files.',
      zh: '在合成临床与 Office 文档数据时，我没有信任单次生成，而是使用对抗式闭环：生成器产出病例/任务，critic 把缺陷转成结构化 findings，arbiter 决定修订、返工或放行。可复用的不是医疗内容本身，而是缺陷分类学和反馈闭环：派生值漂移、跨文件矛盾、不可能时间线、模板污染、元数据泄漏，以及无法从文件回答的 rubric。',
    },
    specs: [
      { k: 'Actor', v: { en: 'generate realistic document cases', zh: '生成真实感文档案例' } },
      { k: 'Critic', v: { en: 'convert defects into structured findings', zh: '将缺陷转成结构化 findings' } },
      { k: 'Monitor', v: { en: 'decide revise, rework, or pass', zh: '裁定修订、返工或放行' } },
      { k: 'Memory', v: { en: 'turn repeated failures into reusable detectors', zh: '把重复失败沉淀成可复用检测器' } },
    ],
    image: nvwaImage,
    article: 'adversarial-qc',
    tags: ['Actor-Critic-Monitor', 'Bad-pattern detectors', 'Synthetic data'],
  },
];

export function CaseStudies() {
  const t = useT();
  return (
    <section className="mx-auto mt-28 max-w-content px-6 md:mt-40">
      <div className="space-y-6">
        {STUDIES.map((s, i) => (
          <Reveal key={i}>
            <article className="surface overflow-hidden">
              {/* figure */}
              <div className="flex justify-center border-b border-hairline bg-[hsl(220_16%_97%)] px-6 py-7 md:py-9">
                <img
                  src={s.image}
                  alt={t(s.title)}
                  loading="lazy"
                  className="max-h-[300px] w-auto max-w-full rounded-lg object-contain md:max-h-[340px]"
                />
              </div>
              <div className="grid gap-px md:grid-cols-[1.35fr_1fr]">
                {/* narrative */}
                <div className="p-8 md:p-11">
                  <p className="eyebrow">{t(s.eyebrow)}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-[1.7rem]">
                    {t(s.title)}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{t(s.body)}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {s.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {s.article && (
                      <Link
                        to={`/post/${s.article}`}
                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
                      >
                        {t(ui.readDeepDive)}
                        <span aria-hidden className="transition-transform group-hover/link:translate-x-0.5">→</span>
                      </Link>
                    )}
                    {s.link && (
                      <a
                        href={s.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {t(s.link.label)} <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* spec sheet */}
                <div className="border-t border-hairline bg-background/40 p-8 md:border-l md:border-t-0 md:p-9">
                  <dl className="space-y-6">
                    {s.specs.map((sp, j) => (
                      <div key={j}>
                        <dt className="font-mono text-xl font-semibold tracking-tight tabular-nums">{sp.k}</dt>
                        <dd className="mt-1 text-sm text-muted-foreground">{t(sp.v)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
