import React from 'react'

interface ErrorBoundaryProps {
    children: React.ReactNode;
  }

  interface ErrorBoundaryState {
    hasError: boolean;
  }

   class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
     
      console.log(error, errorInfo);
    }
  
    render() {
      return this.state.hasError ? (
        <h1>Something went wrong.</h1>
      ) : (
        this.props.children
      );
    }
  }


export default ErrorBoundary