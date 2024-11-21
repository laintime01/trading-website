// src/config/trades.ts
export const tradeData = {
    carpenter: {
      title: "Expert Carpentry Services",
      description: "Custom woodworking solutions for your home",
      color: "amber",
      features: [
        "Custom Furniture Making",
        "Home Renovation",
        "Cabinet Installation",
        "Wood Repairs",
        "Deck Construction",
        "Flooring Installation"
      ],
      aboutContent: `Our carpentry service combines traditional craftsmanship with modern techniques. 
      With over a decade of experience in woodworking, we take pride in creating beautiful, 
      functional pieces that enhance your living space.`,
      specialties: [
        "Custom Furniture",
        "Kitchen Cabinets",
        "Built-in Shelving",
        "Hardwood Flooring",
        "Deck Construction",
        "Window Installation"
      ],
    },
    electrician: {
      title: "Professional Electrical Services",
      description: "Safe and reliable electrical solutions",
      color: "blue",
      features: [
        "Electrical Installations",
        "Safety Inspections",
        "Wiring Upgrades",
        "Emergency Repairs",
        "Lighting Solutions",
        "Smart Home Integration"
      ],
      aboutContent: `Licensed and insured electrical contractors providing comprehensive 
      electrical services for residential and commercial properties. Safety and reliability 
      are our top priorities.`,
      specialties: [
        "Circuit Installation",
        "Electrical Repairs",
        "Lighting Design",
        "Panel Upgrades",
        "Home Automation",
        "Emergency Services"
      ],
    },
    plumber: {
      title: "Quality Plumbing Services",
      description: "Complete plumbing solutions for any need",
      color: "green",
      features: [
        "Pipe Installation",
        "Leak Detection",
        "Drain Cleaning",
        "Water Heater Service",
        "Bathroom Remodeling",
        "Emergency Repairs"
      ],
      aboutContent: `Professional plumbing services with a commitment to quality and reliability. 
      We handle everything from routine maintenance to complex installations, ensuring your 
      plumbing systems run smoothly.`,
      specialties: [
        "Emergency Repairs",
        "Installation Services",
        "Drain Cleaning",
        "Water Heaters",
        "Fixture Installation",
        "Leak Detection"
      ],
    },
    hvac: {
      title: "HVAC Solutions",
      description: "Heating and cooling expertise",
      color: "purple",
      features: [
        "System Installation",
        "Preventive Maintenance",
        "Emergency Repairs",
        "Air Quality Solutions",
        "Energy Efficiency",
        "System Upgrades"
      ],
      aboutContent: `Comprehensive HVAC services to keep your environment comfortable 
      year-round. Our certified technicians provide expert installation, maintenance, 
      and repair services for all types of heating and cooling systems.`,
      specialties: [
        "AC Installation",
        "Heating Services",
        "Ventilation",
        "Maintenance",
        "Air Quality",
        "Energy Solutions"
      ],
    }
  } as const;
  
  export type TradeType = keyof typeof tradeData;
  
  export const isValidTrade = (trade: string): trade is TradeType => {
    return trade in tradeData;
  };