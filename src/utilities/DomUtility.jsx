export const DomUtility = {
    getViewPortRate: (el)=>{
        let rect = el.getBoundingClientRect()
        if (rect.top > screen.height || rect.bottom < 0)
            return 0
        if (Math.abs(rect.top) < 2 && Math.abs(rect.bottom - screen.height) < 2)
            return 1
        if (rect.bottom >= screen.height)
            return (screen.height - rect.top) / screen.height
        return (rect.top + rect.height) / screen.height
    },
    scrollTo: (el)=>{
        let rect = el.getBoundingClientRect()
        if (!DomUtility.__registeredOnScroll){
            window.addEventListener("scroll",()=>{
                if (DomUtility.isScrolling && Math.abs(window.scrollY - DomUtility.__scrollToOffset) <= 3){
                    DomUtility.isScrolling = false
                    if (DomUtility.__scrollTrack)
                        clearTimeout(DomUtility.__scrollTrack)
                }
            })
            DomUtility.__registeredOnScroll = true
        }
        DomUtility.isScrolling = true
        DomUtility.__scrollToOffset = window.scrollY + rect.top
        window.scrollTo({
            top: DomUtility.__scrollToOffset,
            left: 0,
            behavior: "smooth"
        })
        DomUtility._trackScroll();
    },
    isScrolling: false,
    __scrollToOffset: 0,
    __registeredOnScroll: false,
    __scrollTrack: 0,
    _trackScroll: ()=>{
        if (DomUtility.__scrollTrack)
            clearTimeout(DomUtility.__scrollTrack)
        DomUtility.__scrollTrack = setTimeout(()=> 
        {   
            DomUtility.isScrolling = false;
            DomUtility.__scrollTrack = 0
        }, 2000);
    }
}

