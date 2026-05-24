export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never let API keys<br />
          <span className="text-[#58a6ff]">expire again</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Monitor expiration dates across all your services. Get automated email and webhook alerts with step-by-step rotation instructions before keys go stale.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">30+</div>
            <div className="text-[#8b949e] text-sm mt-1">Services supported</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">24h</div>
            <div className="text-[#8b949e] text-sm mt-1">Advance alerts</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">0</div>
            <div className="text-[#8b949e] text-sm mt-1">Outages from expired keys</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited API keys tracked",
              "Email + webhook notifications",
              "7, 14, 30-day advance alerts",
              "Rotation instructions per service",
              "Slack & PagerDuty integrations",
              "Audit log & team access"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which services are supported?",
              a: "We support 30+ popular services including AWS, GitHub, Stripe, Twilio, SendGrid, Datadog, and more. You can also add custom keys with manual expiry dates."
            },
            {
              q: "How do notifications work?",
              a: "You set alert windows (e.g. 30, 14, 7 days before expiry). We send email and/or webhook notifications with service-specific rotation instructions so your team can act fast."
            },
            {
              q: "Is my key data secure?",
              a: "We only store key metadata (name, service, expiry date) — never the actual secret values. All data is encrypted at rest and in transit."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pt-8 border-t border-[#30363d]">
        &copy; {new Date().getFullYear()} API Key Expiry Notifier. All rights reserved.
      </footer>
    </main>
  );
}
