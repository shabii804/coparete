'use client';

import {
  Cpu, Brain, ShoppingCart, GraduationCap, Monitor, Database, Bot, Zap, Shield,
  Target, Eye, Heart, Rocket, Telescope, Gem, Building2, Home, Factory,
  HeartPulse, ShoppingBag, UtensilsCrossed, Truck, Landmark, Plane, Car,
  Dumbbell, Coffee, Smartphone, Code2, Cloud, Layers, GitBranch, Container,
  Boxes, Workflow, Server, Blocks, Wifi, Users, Award, Sparkles, Star,
  TrendingUp, Globe2, Briefcase, Clock, FileText, Mail, Phone, MapPin,
  Search, PenTool, TestTube, RefreshCw, ArrowRight, ArrowUpRight, Send,
  Repeat, Waves, ShieldCheck, CheckCircle2, MessageCircle, Play,
  LayoutDashboard, Plus, Edit2, Trash2, X, Save, ChevronRight, ChevronDown,
  ChevronLeft, Menu, Bell, Settings, Lock, LogOut, Link as LinkIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Cpu, Brain, ShoppingCart, GraduationCap, Monitor, Database, Bot, Zap, Shield,
  Target, Eye, Heart, Rocket, Telescope, Gem, Building2, Home, Factory,
  HeartPulse, ShoppingBag, UtensilsCrossed, Truck, Landmark, Plane, Car,
  Dumbbell, Coffee, Smartphone, Code2, Cloud, Layers, GitBranch, Container,
  Boxes, Workflow, Server, Blocks, Wifi, Users, Award, Sparkles, Star,
  TrendingUp, Globe2, Briefcase, Clock, FileText, Mail, Phone, MapPin,
  Search, PenTool, TestTube, RefreshCw, ArrowRight, ArrowUpRight, Send,
  Repeat, Waves, ShieldCheck, CheckCircle2, MessageCircle, Play,
  LayoutDashboard, Plus, Edit2, Trash2, X, Save, ChevronRight, ChevronDown,
  ChevronLeft, Menu, Bell, Settings, Lock, LogOut, Link: LinkIcon,
};

export function getIcon(name: string): any {
  return ICON_MAP[name] || Cpu; // Default to Cpu if icon not found
}
