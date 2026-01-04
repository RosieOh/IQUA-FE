import axios from 'axios'

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const influencerAPI = {
  // 인플루언서 분석 실행
  analyze: (data) => api.post('/agent/analyze', data),
  
  // 마케팅 리포트 생성
  generateReport: (data) => api.post('/agent/report', data),
  
  // 점수 계산 실행
  createScoreRun: (data) => api.post('/score-runs', data),
  
  // 점수 계산 결과 조회
  getScoreRun: (id) => api.get(`/score-runs/${id}`)
}

export default api

