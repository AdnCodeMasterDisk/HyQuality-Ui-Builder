const components = [
  {
    id: 'Layer-0',
    name: 'Container',
    category: 'layers',
    html: `
    <div class="container d-flex flex-col mobile-flex-col bg-c1" style="min-height: 70px">  </div>`,
  },

  {
    id: 'Layer-1',
    name: '2 columns',
    category: 'layers',
    html: `
    <div class="container d-flex flex-row  mobile-flex-col"> 
    <div class="w-50 d-flex flex-col bg-c1 p-8"> </div>
    <div class="w-50 d-flex flex-col bg-c6 p-8">  </div>
  </div>`,
  },

  {
    id: 'Layer-2',
    name: '3 columns',
    category: 'layers',
    html: `
    <div class="container d-flex flex-row justify-between mobile-flex-col">
      <div class="w-30 d-flex flex-col bg-c1 p-8">
        
      </div>
      <div class="w-30 d-flex flex-col bg-c6 p-8">
        
      </div>
      <div class="w-30 d-flex flex-col bg-c7 p-8">
        
      </div>
    </div>`,
  },

  {
    id: 'Layer-3',
    name: '2 columns %',
    category: 'layers',
    html: `
    <div class="container  d-flex flex-row justify-between mobile-flex-col">
    <div class="w-30 d-flex flex-col bg-c1 p-8">
     
    </div>
    <div class="w-70 d-flex flex-col bg-c6 p-8">

    </div>
  </div>`,
  },
];

export default components;
