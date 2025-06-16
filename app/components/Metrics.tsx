export default function Metrics() {
  return (
    <section
      className="mt-12 mb-12 w-full"
      aria-label="Métricas de rendimiento"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900 mb-1">10K+</p>
          <p className="text-sm text-slate-600">Tasks Completed</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900 mb-1">2K+</p>
          <p className="text-sm text-slate-600">Active Users</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900 mb-1">99%</p>
          <p className="text-sm text-slate-600">Uptime</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900 mb-1">4.9</p>
          <p className="text-sm text-slate-600">User Rating</p>
        </div>
      </div>
    </section>
  );
}
