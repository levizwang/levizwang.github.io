import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { useT, ui, type L } from '../i18n/lang';
import { type PostId } from '../data/posts';
import { TagPill } from './ui/TagPill';
import { ProjectFigure } from './ui/figures';

interface Spec {
  k: string;
  v: L;
}
interface Study {
  eyebrow: L;
  title: L;
  body: L;
  figure: string;
  /** Right-hand label of the figure strip (units / sample size). */
  figRight: string;
  specs: Spec[];
  link?: { href: string; label: L };
  article?: PostId;
  tags: string[];
}

const STUDIES: Study[] = [
  {
    eyebrow: { en: 'Evaluation science', zh: '评测科学' },
    title: {
      en: 'Calibrating benchmark difficulty with controlled experiments.',
      zh: '用对照实验校准 Benchmark 难度。',
    },
    body: {
      en: 'Every synthesis team gets told its output is too easy and too templated, and reworking on feel rarely converges. I set a quantitative acceptance band (solver mean 0.5–0.7), built an isolated eval harness that keeps rubrics and reference answers out of the sandbox by construction, and used a control group of untouched packs to separate real difficulty changes from measurement drift: the solver effort setting alone moved scores by +0.159, while one rework round contributed −0.139. After two rounds, a 134-question legal benchmark finished at a mean of 0.648, inside the band. The judge bugs found during the campaign were fixed with regression tests.',
      zh: '将验收标准量化为解题均分 0.5–0.7 的验收带，搭建从构造上隔离 Rubric 与参考答案的评测 Harness，并以不返修的题包作对照组，分离真实难度变化与测量漂移：解题档位混淆 +0.159，单轮返修净效应 −0.139。两轮返修后，134 题法律基准均分 0.648 落入带内；过程中发现的两处 Judge 缺陷均修复并补回归测试。',
    },
    specs: [
      { k: '0.5–0.7', v: { en: 'the acceptance band difficulty must land in', zh: '难度必须落进的验收带' } },
      { k: '+0.159', v: { en: 'solver-effort confound measured on a control group', zh: '对照组测出的解题档位混淆' } },
      { k: '−0.139', v: { en: 'isolated net effect of one rework round', zh: '单轮返修的隔离净效应' } },
      { k: '0.648', v: { en: 'final mean of the 134-question benchmark', zh: '134 题基准的最终均分' } },
    ],
    figure: 'difficulty-calibration',
    figRight: 'n = 134 · units: score',
    article: 'benchmark-difficulty',
    tags: ['Difficulty calibration', 'Controlled experiments', 'Leak-proof harness'],
  },
  {
    eyebrow: { en: 'Judge reliability', zh: 'Judge 可靠性' },
    title: {
      en: 'Testing the judge before trusting its scores.',
      zh: '先测 Judge，再信分数。',
    },
    body: {
      en: 'In an LLM-judged eval, a judge defect looks exactly like a model defect in the score data. Two cases from production: the judge zeroed items whose rubrics were 91–93% satisfied because it read legitimate in-material citations as answer leakage, and for a stretch it silently dropped rubric dependency fields without anything crashing. The standing defenses now include false-kill arbitration, schema round-trip tests, line-by-line re-checks of scores against the actual artifact, and an oracle check that reference answers score full marks against their own rubrics.',
      zh: 'LLM 判分的评测里，Judge 缺陷在分数数据上与模型缺陷无法区分。生产中发现并修复两类缺陷：Rubric 正向命中 91–93% 的题被误判为答案泄漏而归零；Rubric DAG 依赖字段被静默丢弃且无任何报错。现行防线包括防误杀仲裁、Schema 往返测试、对照产物逐行复核判分，以及「参考答案必须满分」的 Oracle 检查。',
    },
    specs: [
      { k: 'False-kill', v: { en: 'audit fatal zeroes before trusting them', zh: '归零分数先经仲裁再采信' } },
      { k: 'Round-trip', v: { en: 'test that the judge sees every rubric field', zh: '确认 Judge 读到每个 Rubric 字段' } },
      { k: 'Re-check', v: { en: 're-verify scored rows against the artifact', zh: '对照产物逐行复核判分' } },
      { k: 'Oracle', v: { en: 'reference answers must score full marks', zh: '参考答案必须满分' } },
    ],
    figure: 'judge-reliability',
    figRight: 'Units: rubric hits',
    article: 'judge-reliability',
    tags: ['Judge debugging', 'Hallucination re-check', 'Oracle validation'],
  },
  {
    eyebrow: { en: 'Evidence-grounded synthesis', zh: '证据约束合成' },
    title: {
      en: 'Turning expert files into eval tasks that cannot be guessed.',
      zh: '基于证据约束生成无法蒙对的评测任务。',
    },
    body: {
      en: 'The core idea: the generator is not trusted. Source files are first converted into locator-bound evidence, then independent roles draft, critique, verify, and package the task. Before delivery, the task is checked for answer leakage, unsupported claims, and guessability. The contract is what matters: every answerable claim must point back to source evidence, and removing the files should make the task fail.',
      zh: '核心原则是不信任生成器：源文件先抽取为绑定 Locator 的证据，再由相互独立的角色分别出题、挑刺、核验与打包；交付前过答案泄漏、无证据断言、可蒙性三道检查。内部节点结构与 prompt 配方不公开，对外重要的是契约：每个可回答的断言必须能指回源证据，抽走文件则任务必然失败。',
    },
    specs: [
      { k: 'Evidence first', v: { en: 'locator-bound facts before prompt drafting', zh: '先绑定证据，再写题面' } },
      { k: 'Role separation', v: { en: 'author, verifier, judge, and QC kept independent', zh: '出题、核验、判分、质检角色隔离' } },
      { k: 'Anti-guessing', v: { en: 'tasks must depend on reading the files', zh: '题目必须依赖真实读文件' } },
      { k: 'Delivery gate', v: { en: 'leakage, unsupported-claim, and rubric checks', zh: '泄漏、无证据断言与 Rubric 门控' } },
    ],
    figure: 'evidence-ledger',
    figRight: 'Units: claims',
    article: 'evidence-ledger',
    tags: ['Evidence ledger', 'Anti-leakage', 'Synthetic eval data'],
  },
  {
    eyebrow: { en: 'Multi-agent verification', zh: 'Multi-Agent 验证' },
    title: {
      en: 'Reviewing 17 commits with 51 agents.',
      zh: '用 51 个 Agent 审 17 个 commit。',
    },
    body: {
      en: 'A teammate landed a 17-commit hardening series on a fork of my pipeline. Instead of reading the 216-file diff by hand, I ran a review workflow: six finders with different focuses proposed 45 candidate defects, and each candidate went to an independent verifier that had to reproduce it by execution (a failing test or a real exception) before it counted. 40 were confirmed, and each was attributed to its introducing commit with git log -S. The most useful finding was that the hardening commits themselves had introduced fail-open regressions and answer leakage, the defect classes they were meant to remove.',
      zh: '同事在我的 Pipeline fork 上提交 17 个加固 commit，审查不走人工通读：6 个关注点不同的 finder 提出 45 个候选缺陷，每个候选由独立 verifier 执行复现（失败测试或真实异常）才计数，最终确认 40 个，并用 git log -S 定位到引入 commit。最有价值的发现是这批加固 commit 自身引入了 fail-open 回归与答案泄漏——正是它要消除的那类缺陷。',
    },
    specs: [
      { k: '6 finders', v: { en: 'independent lenses over the same diff', zh: '同一份 diff 的 6 个独立审查视角' } },
      { k: '45 → 40', v: { en: 'candidates confirmed by execution, not plausibility', zh: '候选缺陷以执行复现确认' } },
      { k: 'git log -S', v: { en: 'every defect attributed to its introducing commit', zh: '每个缺陷定位到引入 commit' } },
      { k: '~59 min', v: { en: 'wall-clock for the full review', zh: '整个审查的墙钟时间' } },
    ],
    figure: 'adversarial-code-review',
    figRight: 'n = 51 agents',
    article: 'adversarial-code-review',
    tags: ['Finder/verifier split', 'Execution-backed repro', 'Adversarial review'],
  },
  {
    eyebrow: { en: 'Adversarial QC', zh: '对抗式 QC' },
    title: {
      en: 'Adversarial QC for self-generated data.',
      zh: '对自生成数据做对抗式 QC。',
    },
    body: {
      en: 'For synthetic clinical and office-document data, I used an adversarial loop rather than trusting one generator pass. A generator creates the case, a critic turns defects into structured findings, and an arbiter decides whether to revise, rework, or pass. The durable part is not the medical content itself; it is the defect taxonomy and the feedback loop: derived-value drift, cross-file contradictions, impossible timelines, template contamination, metadata leakage, and rubrics that cannot be answered from the files.',
      zh: '合成临床与 Office 文档数据不信任单次生成：Actor 产出病例或任务，Critic 将缺陷转为结构化 findings，Monitor 裁定修订、返工或放行。可复用的产出是缺陷分类与反馈闭环：派生值漂移、跨文件矛盾、时间线不可能、模板污染、元数据泄漏，以及无法从文件回答的 Rubric。',
    },
    specs: [
      { k: 'Actor', v: { en: 'generate realistic document cases', zh: '生成真实感文档案例' } },
      { k: 'Critic', v: { en: 'convert defects into structured findings', zh: '把缺陷转成结构化 findings' } },
      { k: 'Monitor', v: { en: 'decide revise, rework, or pass', zh: '裁定修订、返工或放行' } },
      { k: 'Memory', v: { en: 'turn repeated failures into reusable detectors', zh: '将高频缺陷固化为检测器' } },
    ],
    figure: 'adversarial-qc',
    figRight: 'Loop: Actor · Critic · Monitor',
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
              <div className="strip">
                <span className="truncate">Fig. {String(i + 3).padStart(2, '0')} — {t(s.eyebrow)}</span>
                <span className="shrink-0">{s.figRight}</span>
              </div>
              <div className="ref-grid flex justify-center border-b border-line px-6 py-7 md:py-9">
                <ProjectFigure
                  id={s.figure}
                  className="max-h-[300px] w-full max-w-[52rem] md:max-h-[340px]"
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
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
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
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {t(s.link.label)} <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* spec sheet */}
                <div className="border-t border-line bg-background/40 md:border-l md:border-t-0">
                  <div className="strip">
                    <span>Spec sheet</span>
                    <span>Rev A1</span>
                  </div>
                  <dl className="space-y-6 p-8 md:p-9">
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
