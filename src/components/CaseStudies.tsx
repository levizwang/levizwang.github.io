import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { useT, ui, type L } from '../i18n/lang';
import { type PostId } from '../data/posts';
import { TagPill } from './ui/TagPill';
import { evalPipeline as pipelineImage, agentAsJudge as judgeImage, harbor as harborImage } from '../images/projects';

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
    eyebrow: { en: 'Flagship system', zh: '旗舰系统' },
    title: {
      en: 'A 19-stage architecture that proves each question is real.',
      zh: '一套 19 节点的架构，证明每道题都是真的。',
    },
    body: {
      en: 'The hard part of synthetic eval data isn’t writing questions — it’s proving each one genuinely measures what it claims, without the model that wrote it quietly grading its own homework. Every fact is extracted by two independent model families and bound to a source-file locator before a word of the prompt exists; the test-taker, reference author, rubric author and every checker are forced onto different families by a fail-closed validator; and each task must survive a three-way ablation — answer, files, files-removed — shipping only if removing the files makes the model fail.',
      zh: '合成评测数据真正难的不是写题，而是证明每道题确实测到了它声称要测的东西——还不能让出题的模型悄悄给自己判分。每条事实都由两个独立模型族抽取、并在写下任何题面之前就绑定到源文件 locator；解题者、参考答案作者、rubric 作者和每个 checker 都被一个 fail-closed 校验器强制分配到不同模型族；每道题还必须通过三向消融——给答案、给文件、抽走文件——只有"抽走文件后模型答不出"才放行。',
    },
    specs: [
      { k: '19 / 11', v: { en: 'designed stages · live checkers', zh: '设计节点 · 已实现 checker' } },
      { k: '6 + 4', v: { en: 'reviewer jury · QC lenses', zh: '人评审团 · QC 维度' } },
      { k: '3-way', v: { en: 'anti-guessing ablation gate', zh: '防蒙消融门槛' } },
      { k: '48', v: { en: 'adversarial-review findings', zh: '条对抗式评审 finding' } },
    ],
    image: pipelineImage,
    article: 'evidence-ledger',
    tags: ['Cross-vendor independence', 'Evidence ledger', 'Resumable state machine'],
  },
  {
    eyebrow: { en: 'Evaluation research', zh: '评测研究' },
    title: {
      en: 'Proving how you grade beats which model grades.',
      zh: '证明"怎么判"比"用哪个模型判"更重要。',
    },
    body: {
      en: 'A controlled pilot — 566 rubric judgments across 15 stratified tasks — showed an agent that opens the document and gathers its own evidence beats a hand-written metric by +0.118 to +0.166 agreement with human ground truth, while upgrading the metric’s own judge model moves the needle only ~0.04. Method dominates model. And the agent was both more accurate and cheaper: amortizing the prompt cache, it spent 69k tokens where the metric re-sent the whole document for 5.3M.',
      zh: '一次受控的 pilot——15 道分层任务上的 566 次 rubric 判定——显示：一个会自己打开文档、自行收集证据的 agent，与人工 metric 相比，对齐人工 GT 的一致率高出 +0.118 到 +0.166；而升级 metric 自己的裁判模型只带来约 0.04 的提升。方法 > 模型。而且这个 agent 既更准也更便宜：靠 prompt cache 摊销，它只花 69k token，而 metric 为每条 rubric 重发整篇文档、花了 5.3M。',
    },
    specs: [
      { k: '+0.118 / +0.166', v: { en: 'agent vs metric agreement', zh: 'agent vs metric 一致率' } },
      { k: '~0.04', v: { en: 'gain from upgrading the metric’s model', zh: '仅升级 metric 模型的提升' } },
      { k: '566 / 15', v: { en: 'judgments · tasks (pilot)', zh: '次判定 · 任务（pilot）' } },
      { k: '69k vs 5.3M', v: { en: 'tokens — more accurate, cheaper', zh: 'token —— 更准且更便宜' } },
    ],
    image: judgeImage,
    article: 'agent-as-judge',
    tags: ['Agent-as-judge', 'Human-aligned', 'Cost-aware'],
  },
  {
    eyebrow: { en: 'Open source', zh: '开源' },
    title: {
      en: 'A new agent harness for an open-source framework.',
      zh: '给一个开源框架写的新 agent harness。',
    },
    body: {
      en: 'Built a production-grade, upstream-ready integration of a new agent harness (Stirrup) for the public Harbor evaluation framework — runner, provider routing, ATIF trajectory capture, and a per-model max-token ceiling table to dodge provider hard-limits — with 50 unit tests covering both POSIX and Windows paths. It lives on a clean fork, isolated from environment-specific glue: the real test of an integration is whether you can separate the part that helps everyone from the part that only helps you.',
      zh: '为公开的 Harbor 评测框架做了一个生产级、可直接上游的新 agent harness（Stirrup）集成——runner、provider 路由、ATIF 轨迹捕获，以及一张按模型的 max-token 上限表来规避各家硬限——配 50 个覆盖 POSIX 与 Windows 路径的单测。它放在一个干净的 fork 上，与环境相关代码彻底剥离：检验一个集成好不好的真正标准，就是你能不能把"对所有人都有用的部分"从"只对你有用的部分"里分开。',
    },
    specs: [
      { k: '+2,332 / 6', v: { en: 'lines added · files', zh: '行新增 · 文件' } },
      { k: '50', v: { en: 'unit tests', zh: '个单元测试' } },
      { k: 'harbor-framework/harbor', v: { en: 'public framework', zh: '公开框架' } },
    ],
    image: harborImage,
    link: { href: 'https://github.com/levizwang/harbor', label: { en: 'View the fork', zh: '查看 fork' } },
    tags: ['Harbor', 'Agent adapter', 'Tested'],
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
