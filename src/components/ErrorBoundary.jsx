import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error){
    return { hasError: true, error }
  }

  componentDidCatch(error, info){
    // keep a console trace for debugging
    console.error('Captured error in ErrorBoundary:', error, info)
    this.setState({ info })
  }

  render(){
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-acream text-ablue-900 p-6">
          <div className="max-w-3xl w-full glass p-8 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold mb-2">Something went wrong.</h2>
            <p className="text-sm text-ablue-700 mb-4">A runtime error occurred while rendering the site — the page is being shown here so you can see the problem and continue work.</p>
            <details className="text-xs text-ablue-600 bg-white/60 p-4 rounded-md overflow-auto" style={{whiteSpace: 'pre-wrap'}}>
              <summary className="mb-2 font-medium">Error details (expand)</summary>
              {this.state.error && <div><strong>Message:</strong> {String(this.state.error.message || this.state.error)}</div>}
              {this.state.info && <div className="mt-2"><strong>Stack:</strong> <pre className="text-xs mt-1">{this.state.info.componentStack}</pre></div>}
            </details>

            <div className="mt-6 flex gap-3">
              <button onClick={() => location.reload()} className="px-4 py-2 rounded-full bg-ablue-600 text-white">Reload</button>
              <button onClick={() => console.clear()} className="px-4 py-2 rounded-full bg-white border border-gray-100">Clear console</button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
