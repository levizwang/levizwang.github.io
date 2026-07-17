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
      zh: '用对照实验校准基准难度。',
    },
    body: {
      en: 'Every synthesis team gets told its output is too easy and too templated, and reworking on feel rarely converges. I set a quantitative acceptance band (solver mean 0.5–0.7), built an isolated eval harness that keeps rubrics and reference answers out of the sandbox by construction, and used a control group of untouched packs to separate real difficulty changes from measurement drift: the solver effort setting alone moved scores by +0.159, while one rework round contributed −0.139. After two rounds, a 134-question legal benchmark finished at a mean of 0.648, inside the band. The judge bugs found during the campaign were fixed with regression tests.',
      zh: '做合成的团队都会被说「太简单、太模板化」，但凭感觉返修很难收敛。我的做法是先把验收标准定成数字（解题均分落在 0.5–0.7），再搭一个从构造上就不让 rubric 和参考答案进沙箱的隔离评测 harness，然后留一组不返修的题包当对照，把真实的难度变化和测量漂移分开：光是解题档位一项就能让分数变 +0.159，而一轮返修的净效应是 −0.139。两轮之后，这份 134 题的法律基准均分停在 0.648，落在带内。校准中顺手发现的裁判 bug 也都修了，补上了回归测试。',
    },
    specs: [
      { k: '0.5–0.7', v: { en: 'the acceptance band difficulty must land in', zh: '难度必须落进的验收带' } },
      { k: '+0.159', v: { en: 'solver-effort confound measured on a control group', zh: '对照组测出的解题档位混淆因子' } },
      { k: '−0.139', v: { en: 'isolated net effect of one rework round', zh: '一轮返修的隔离净效应' } },
      { k: '0.648', v: { en: 'final mean of the 134-question benchmark', zh: '134 题基准的最终均分' } },
    ],
    figure: 'difficulty-calibration',
    article: 'benchmark-difficulty',
    tags: ['Difficulty calibration', 'Controlled experiments', 'Leak-proof harness'],
  },
  {
    eyebrow: { en: 'Judge reliability', zh: '裁判可靠性' },
    title: {
      en: 'Testing the judge before trusting its scores.',
      zh: '先测裁判，再信它给的分。',
    },
    body: {
      en: 'In an LLM-judged eval, a judge defect looks exactly like a model defect in the score data. Two cases from production: the judge zeroed items whose rubrics were 91–93% satisfied because it read legitimate in-material citations as answer leakage, and for a stretch it silently dropped rubric dependency fields without anything crashing. The standing defenses now include false-kill arbitration, schema round-trip tests, line-by-line re-checks of scores against the actual artifact, and an oracle check that reference answers score full marks against their own rubrics.',
      zh: '在 LLM 判分的评测里，裁判出了毛病，在分数数据上看起来跟模型出了毛病一模一样。生产里真抓到过的两个例子：裁判把 rubric 正向命中 91–93% 的题直接归零，因为它把材料里的合法引用当成了答案泄漏；还有一段时间它悄悄丢掉 rubric 依赖字段，没有任何报错。现在的常规防御有：防误杀仲裁、schema 往返测试、对照真实产物逐行复核判分，以及一条 oracle 检查——参考答案必须在自己的 rubric 上拿满分。',
    },
    specs: [
      { k: 'False-kill', v: { en: 'audit fatal zeroes before trusting them', zh: '一票归零之前，先审计它' } },
      { k: 'Round-trip', v: { en: 'test that the judge sees every rubric field', zh: '确认裁判读到了每个 rubric 字段' } },
      { k: 'Re-check', v: { en: 're-verify scored rows against the artifact', zh: '对照产物逐行复核判分' } },
      { k: 'Oracle', v: { en: 'reference answers must score full marks', zh: '参考答案必须拿满分' } },
    ],
    figure: 'judge-reliability',
    article: 'judge-reliability',
    tags: ['Judge debugging', 'Hallucination re-check', 'Oracle validation'],
  },
  {
    eyebrow: { en: 'Evidence-grounded synthesis', zh: '证据约束合成' },
    title: {
      en: 'Turning expert files into eval tasks that cannot be guessed.',
      zh: '把专家文件变成蒙不出来的评测任务。',
    },
    body: {
      en: 'I built a public-safe version of this story around the core idea: the generator is not trusted. Source files are first converted into locator-bound evidence, then independent roles draft, critique, verify, and package the task. Before delivery, the task is checked for answer leakage, unsupported claims, and guessability. The internal node layout and prompts are deliberately omitted; what matters publicly is the contract: every answerable claim must point back to source evidence, and removing the files should make the task fail.',
      zh: '这段经历的公开版本只讲核心原则：不信任生成器。原始文件先变成带 locator 的证据，再由互相独立的角色分别出题、挑刺、核验和打包。交付前还要过三关：答案泄漏、无证据断言、可蒙性检查。内部的节点结构和 prompt 配方刻意不公开；对外重要的是契约——每个可回答的断言都必须能指回源证据，把文件抽走，任务就应该做不出来。',
    },
    specs: [
      { k: 'Evidence first', v: { en: 'locator-bound facts before prompt drafting', zh: '先绑定证据，再写题面' } },
      { k: 'Role separation', v: { en: 'author, verifier, judge, and QC kept independent', zh: '出题、核验、判分、质检角色隔离' } },
      { k: 'Anti-guessing', v: { en: 'tasks must depend on reading the files', zh: '题目必须真的依赖读文件' } },
      { k: 'Delivery gate', v: { en: 'leakage, unsupported-claim, and rubric checks', zh: '泄漏、无证据断言与 rubric 门控' } },
    ],
    figure: 'evidence-ledger',
    article: 'evidence-ledger',
    tags: ['Evidence ledger', 'Anti-leakage', 'Synthetic eval data'],
  },
  {
    eyebrow: { en: 'Multi-agent verification', zh: '多智能体验证' },
    title: {
      en: 'Reviewing 17 commits with 51 agents.',
      zh: '用 51 个 agent 审 17 个 commit。',
    },
    body: {
      en: 'A teammate landed a 17-commit hardening series on a fork of my pipeline. Instead of reading the 216-file diff by hand, I ran a review workflow: six finders with different focuses proposed 45 candidate defects, and each candidate went to an independent verifier that had to reproduce it by execution (a failing test or a real exception) before it counted. 40 were confirmed, and each was attributed to its introducing commit with git log -S. The most useful finding was that the hardening commits themselves had introduced fail-open regressions and answer leakage, the defect classes they were meant to remove.',
      zh: '同事在我的流水线 fork 上提了 17 个加固 commit。我没有手读 216 个文件的 diff，而是跑了一个审查工作流：6 个关注点不同的 finder 提出 45 个候选缺陷，每个候选都交给独立的 verifier，必须执行复现（一个失败的测试或一个真实异常）才算数。最终确认 40 个，并用 git log -S 把每个缺陷定位到引入它的 commit。最有价值的发现是：这批加固 commit 自己就引入了 fail-open 回归和答案泄漏——正是它们本来要消除的那类缺陷。',
    },
    specs: [
      { k: '6 finders', v: { en: 'independent lenses over the same diff', zh: '同一份 diff 的 6 个独立审查视角' } },
      { k: '45 → 40', v: { en: 'candidates confirmed by execution, not plausibility', zh: '候选缺陷靠执行复现确认，不靠「看着像」' } },
      { k: 'git log -S', v: { en: 'every defect attributed to its introducing commit', zh: '每个缺陷定位到引入它的 commit' } },
      { k: '~59 min', v: { en: 'wall-clock for the full review', zh: '整个审查的墙钟时间' } },
    ],
    figure: 'adversarial-code-review',
    article: 'adversarial-code-review',
    tags: ['Finder/verifier split', 'Execution-backed repro', 'Adversarial review'],
  },
  {
    eyebrow: { en: 'Adversarial QC', zh: '对抗式质检' },
    title: {
      en: 'Adversarial QC for self-generated data.',
      zh: '自己生成的数据，也要对着干地质检。',
    },
    body: {
      en: 'For synthetic clinical and office-document data, I used an adversarial loop rather than trusting one generator pass. A generator creates the case, a critic turns defects into structured findings, and an arbiter decides whether to revise, rework, or pass. The durable part is not the medical content itself; it is the defect taxonomy and the feedback loop: derived-value drift, cross-file contradictions, impossible timelines, template contamination, metadata leakage, and rubrics that cannot be answered from the files.',
      zh: '做合成临床和 Office 文档数据时，我不信任单次生成，而是用对抗闭环：生成器产出病例或任务，critic 把缺陷转成结构化的 findings，arbiter 决定修订、返工还是放行。真正可复用的不是医疗内容本身，而是那套缺陷分类和反馈闭环：派生值漂移、跨文件矛盾、不可能的时间线、模板污染、元数据泄漏，以及没法从文件回答的 rubric。',
    },
    specs: [
      { k: 'Actor', v: { en: 'generate realistic document cases', zh: '生成真实感文档案例' } },
      { k: 'Critic', v: { en: 'convert defects into structured findings', zh: '把缺陷转成结构化 findings' } },
      { k: 'Monitor', v: { en: 'decide revise, rework, or pass', zh: '裁定修订、返工还是放行' } },
      { k: 'Memory', v: { en: 'turn repeated failures into reusable detectors', zh: '把反复踩的坑做成检测器' } },
    ],
    figure: 'adversarial-qc',
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
                <span className="shrink-0">Scale 1:1</span>
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
