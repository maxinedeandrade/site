import './index.css'

export default function Index() {
  return (
    <>
      <div class='min-h-screen bg-stone-100'>
        <div class='container mx-auto py-8 flex flex-row'>
          <div class='w-1/6'>
            <img class='w-48 h-48' src='https://placehold.co/400' />
          </div>
          <div class='space-y-4'>
            <div>
              <h1 class='text-4xl'>Maxine DeAndrade</h1>
              <span>(he/she)</span>
            </div>
            <div class='space-y-4'>
              <div>
                <span class='font-mono block'>(λ<span class='text-green-900'>x</span>.λ<span class='text-blue-900'>y</span>.&lt;<span class='text-green-900'>x</span>@<span class='text-blue-900'>y</span>.com&gt;) <span class='text-green-900'>deandrade</span> <span class='text-blue-900'>posteo</span></span>
                <a class='underline block hover:bg-black hover:text-white w-fit' href='https://github.com/maxinedeandrade'>GitHub</a>
                <a class='underline block hover:bg-black hover:text-white w-fit' href='https://youtube.com/@mdeandrade'>YouTube</a>
              </div>
              <p class='text-lg block'>Software engineer with an interest in formal verification and low-level programming.</p>
              <div>
                <h2 class='text-3xl'>Posts</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}